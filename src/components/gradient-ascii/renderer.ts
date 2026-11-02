import { FIELD } from './field';
import { COMPOSITE } from './composite';
import { buildAtlas, createTarget, link, sizeTarget, toLab } from './webgl';

/** React Bits field + glyph passes, without the optional bloom passes. */
export function createRenderer(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext('webgl2', { alpha: true, antialias: false, depth: false });
  if (!gl) return null;
  const field = link(gl, FIELD);
  const composite = link(gl, COMPOSITE);
  if (!field || !composite) {
    if (field) gl.deleteProgram(field.program);
    if (composite) gl.deleteProgram(composite.program);
    return null;
  }
  const vao = gl.createVertexArray();
  const target = createTarget(gl, 2);
  const styles = getComputedStyle(document.documentElement);
  const font = styles.getPropertyValue('--font-mono').trim();
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let atlas = buildAtlas(gl, characters, font);
  const probe = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  const ramp = new Float32Array(24);
  ['--ascii-ink', '--ascii-highlight', '--ascii-soft', '--ascii-ink'].forEach((token, i) => {
    if (!probe) return;
    probe.fillStyle = styles.getPropertyValue(token).trim();
    probe.fillRect(0, 0, 1, 1);
    const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
    ramp.set(toLab([r / 255, g / 255, b / 255]), i * 3);
  });
  if (probe) {
    probe.fillStyle = styles.getPropertyValue('--ascii-muted').trim();
    probe.fillRect(0, 0, 1, 1);
  }
  const muted = probe ? [...probe.getImageData(0, 0, 1, 1).data].slice(0, 3).map(v => v / 255) : [0, 0, 0];
  const mutedOpacity = Number(styles.getPropertyValue('--ascii-muted-opacity'));
  const glyphOpacity = Number(styles.getPropertyValue('--ascii-glyph-opacity'));
  const outerDensity = Number(styles.getPropertyValue('--ascii-outer-density'));
  const focus = new Float32Array([0.75, 0.5, 3, 2]);
  let ratio = 1;
  return {
    resize(width: number, height: number) {
      ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      const bounds = canvas.getBoundingClientRect();
      const portrait = canvas.closest('.hero')?.querySelector('.portrait-visual')?.getBoundingClientRect();
      if (portrait && width && height) {
        focus.set([
          (portrait.left + portrait.width / 2 - bounds.left) / width,
          1 - (portrait.top + portrait.height / 2 - bounds.top) / height,
          width / (portrait.width * 0.85),
          height / (portrait.height * (width < 640 ? 0.6 : 0.85)),
        ]);
      }
      sizeTarget(gl, target, Math.ceil(canvas.width / 2), Math.ceil(canvas.height / 2));
    },
    refreshFont() {
      gl.deleteTexture(atlas.texture);
      atlas = buildAtlas(gl, characters, font);
    },
    draw(time: number, reduced: boolean, trail: Float32Array, clicks: Float32Array) {
      const aspect = canvas.width / canvas.height;
      gl.bindVertexArray(vao);
      gl.disable(gl.BLEND);
      gl.bindFramebuffer(gl.FRAMEBUFFER, target.framebuffer);
      gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1]);
      gl.viewport(0, 0, target.width, target.height);
      gl.useProgram(field.program);
      const fu = field.uniforms;
      gl.uniform1f(fu.uAspect, aspect);
      gl.uniform1f(fu.uCenterY, focus[1]);
      gl.uniform1f(fu.uTime, time * 0.5);
      gl.uniform1i(fu.uShape, 0);
      gl.uniform3fv(fu.uRamp, ramp);
      gl.uniform1i(fu.uCount, 4);
      gl.uniform1f(fu.uScale, 0.8);
      gl.uniform1f(fu.uSoftness, 0.65);
      gl.uniform1f(fu.uFlow, 0.5);
      gl.uniform2f(fu.uSeed, 11 * 3.17, 11 * 1.91);
      gl.uniform4fv(fu.uTrail, trail);
      gl.uniform1f(fu.uRadius, 0.04);
      gl.uniform4fv(fu.uClicks, clicks);
      gl.uniform1i(fu.uClickEffect, 1);
      gl.uniform1f(fu.uIntro, 1);
      gl.uniform1f(fu.uFrame, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(composite.program);
      const cu = composite.uniforms;
      gl.uniform4fv(cu.uFocus, focus);
      gl.uniform3fv(cu.uMuted, muted);
      gl.uniform1f(cu.uMutedOpacity, mutedOpacity);
      gl.uniform1f(cu.uOuterDensity, outerDensity);
      [target.textures[0], target.textures[1], atlas.texture].forEach((texture, i) => {
        gl.activeTexture(gl.TEXTURE0 + i);
        gl.bindTexture(gl.TEXTURE_2D, texture);
      });
      gl.uniform1i(cu.uField, 0);
      gl.uniform1i(cu.uAux, 1);
      gl.uniform1i(cu.uAtlas, 2);
      const cellH = 14 * ratio;
      const cellW = cellH * 0.6;
      gl.uniform2f(cu.uResolution, canvas.width, canvas.height);
      gl.uniform2f(cu.uCell, cellW, cellH);
      gl.uniform2f(cu.uOffset, 0, 0);
      gl.uniform2f(cu.uAtlasGrid, atlas.grid[0], atlas.grid[1]);
      gl.uniform1f(cu.uCount, atlas.count);
      gl.uniform1f(cu.uDensity, 1);
      gl.uniform1f(cu.uOpacity, glyphOpacity);
      gl.uniform1f(cu.uFlicker, reduced ? 0 : 0.25);
      gl.uniform1f(cu.uDepth, 0.43);
      gl.uniform1f(cu.uGlow, 0.2);
      gl.uniform1f(cu.uGlyphTime, time);
      gl.uniform1f(cu.uSeedValue, 11);
      gl.uniform1f(cu.uLight, 1);
      gl.uniform1f(cu.uGrain, 0);
      gl.uniform1f(cu.uFrame, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
    dispose() {
      target.textures.forEach(texture => gl.deleteTexture(texture));
      gl.deleteFramebuffer(target.framebuffer);
      gl.deleteTexture(atlas.texture);
      gl.deleteVertexArray(vao);
      gl.deleteProgram(field.program);
      gl.deleteProgram(composite.program);
    },
  };
}
