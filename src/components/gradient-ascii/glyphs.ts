// Adapted from React Bits GradientASCII, copyright (c) 2026 David Haz.
// Source and license: see THIRD_PARTY_NOTICES.md.
import { COMMON } from './common';

export const GLYPHS = `
uniform sampler2D uField;
uniform sampler2D uAux;
uniform sampler2D uAtlas;
uniform vec2 uResolution;
uniform vec2 uCell;
uniform vec2 uOffset;
uniform vec2 uAtlasGrid;
uniform float uCount;
uniform float uDensity;
uniform float uOpacity;
uniform float uFlicker;
uniform float uDepth;
uniform float uGlyphTime;
uniform float uSeedValue;
uniform float uLight;
uniform float uGlow;
uniform float uOuterDensity;
${COMMON}
float sampleGlyph(float index, vec2 local, vec2 coord, float soft) {
  float column = mod(index, uAtlasGrid.x);
  float row = floor(index / uAtlasGrid.x);
  vec2 atlasUv = vec2((column + local.x) / uAtlasGrid.x, (row + 1.0 - local.y) / uAtlasGrid.y);
  vec2 continuous = coord / uAtlasGrid;
  float scale = exp2(soft);
  return textureGrad(uAtlas, atlasUv, dFdx(continuous) * scale, dFdy(continuous) * scale).a;
}

vec4 glyphAt(vec2 px) {
  vec2 coord = (px - uOffset) / uCell;
  vec2 cell = floor(coord);
  vec2 local = coord - cell;
  vec2 uv = clamp(((cell + 0.5) * uCell + uOffset) / uResolution, vec2(0.0), vec2(1.0));
  vec4 field = texture(uField, uv);
  vec4 aux = texture(uAux, uv);
  vec3 visible = uLight > 0.5 ? field.rgb + (1.0 - field.a) : field.rgb;
  float luma = dot(visible, vec3(0.2126, 0.7152, 0.0722));
  float value = uLight > 0.5 ? clamp((1.0 - luma) * 1.5, 0.0, 1.0) : luma;
  float pick = hash12(cell + uSeedValue * 7.31);
  float level = hash12(cell * 1.73 + 4.1 + uSeedValue);
  // Keep glyphs visible across the hero, even outside the gradient field.
  value = max(value, 0.28 + 0.18 * level);
  float tick = floor(uGlyphTime * 9.0 + level * 9.0);
  float wobble = (hash12(cell * 2.31 + tick * 17.7) - 0.5) * uFlicker * 0.4 + (level - 0.5) * 0.1;
  float tone = clamp(pow(value, 0.75) + wobble, 0.0, 1.0);
  float index = floor(tone * (uCount - 1.0) + 0.5);
  float decode = max(aux.g, 1.0 - aux.r);
  if (decode > 0.02) {
    float frame = floor(uGlyphTime * 20.0);
    if (hash12(cell * 3.7 + frame * 5.3) < decode * 1.25) index = 1.0 + floor(hash12(cell + frame * 1.37) * (uCount - 1.0));
  }
  float proximity = 1.0 - smoothstep(0.3, 1.35, length((uv - uFocus.xy) * uFocus.zw));
  float present = step(pick, uDensity * mix(uOuterDensity, 1.0, proximity));
  float cutoff = smoothstep(0.03, 0.1, value);
  float focus = step(hash12(cell * 0.71 + 9.2 + uSeedValue), uDepth);
  float coverage = sampleGlyph(index, local, coord, focus * 1.2);
  float halo = sampleGlyph(index, local, coord, 2.5) * uGlow;
  coverage = clamp(coverage + halo * (1.0 - coverage), 0.0, 1.0);
  float opacity = mix(uOpacity, 1.0, proximity);
  float alpha = opacity * present * cutoff * coverage * mix(1.0, 0.35 + 0.65 * level, 0.55) * (1.0 - focus * 0.5);
  if (uLight < 0.5) {
    vec3 light = field.rgb * 0.55 + vec3(0.03) * field.a;
    return vec4(light * alpha, 0.6 * field.a * alpha);
  }
  // Use the gradient's actual pigment rather than its wash over white.
  vec3 pigment = field.rgb / max(field.a, 0.001);
  vec3 ink = mix(visible, pigment, smoothstep(0.05, 0.4, field.a));
  return vec4(ink * alpha, alpha);
}
`;
