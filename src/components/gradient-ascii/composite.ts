// Adapted from React Bits GradientASCII, copyright (c) 2026 David Haz.
// Source and license: see THIRD_PARTY_NOTICES.md.
import { GLYPHS } from './glyphs';

export const COMPOSITE = `#version 300 es
precision highp float;


uniform vec4 uFocus;
uniform vec3 uMuted;
uniform float uMutedOpacity;
uniform float uGrain;
uniform float uFrame;
in vec2 vUv;
out vec4 outColor;
${GLYPHS}
void main() {
  // The gradient supplies glyph colors; the space between glyphs stays clear.
  vec4 color = glyphAt(gl_FragCoord.xy);
  float grain = (hash12(gl_FragCoord.xy + uFrame * vec2(17.0, 59.0)) + hash12(gl_FragCoord.xy * 1.31 + uFrame * 7.0) - 1.0) * uGrain;
  float body = clamp(color.a, 0.0, 1.0);
  color.rgb += grain * (0.25 + body) * 0.5;
  color.a = clamp(color.a, 0.0, 1.0);
  color.rgb = clamp(color.rgb, 0.0, color.a);
  float proximity = 1.0 - smoothstep(0.3, 1.35, length((vUv - uFocus.xy) * uFocus.zw));
  vec3 muted = uMuted * color.a;
  color.rgb = mix(muted, color.rgb, proximity);
  outColor = color * mix(uMutedOpacity, 1.0, proximity);
}`;
