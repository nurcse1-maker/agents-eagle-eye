/**
 * Planet shaders for the agent bodies (Addendum A.3). Procedural only: 3D value-noise continents and a latitude cloud
 * band in the agent colour, evaluated in OBJECT space so the spin about the tilted axis is visible; terminator lighting
 * with the orb as the light; a faint night-side emissive so a planet never goes black; a fresnel rim. The atmosphere is
 * a second instanced pass (back faces of a slightly larger shell, additive) that glows strongest at the limb, lit side.
 *
 * Per-instance attributes shared by both passes:
 *   aB  xyz centre, w body radius       aBC rgb colour 0..1, w act (power)
 *   aBE fade, core pulse, light, seed   aBQ orientation quaternion (axis tilt * spin)
 * Uniforms: uOrb (world position of the light), uTime.
 */

/** Rotate v by unit quaternion q. */
const QROT = /* glsl */ `
vec3 qrot(vec4 q, vec3 v) {
  vec3 t = 2.0 * cross(q.xyz, v);
  return v + q.w * t + cross(q.xyz, t);
}
`

export const PLANET_VERT = /* glsl */ `
attribute vec4 aB;
attribute vec4 aBC;
attribute vec4 aBE;
attribute vec4 aBQ;
uniform float uScale;
varying vec3 vObj;
varying vec3 vN;
varying vec3 vW;
varying vec4 vCol;
varying vec4 vE;
${QROT}
void main() {
  vObj = position;
  vN = qrot(aBQ, normal);
  vW = aB.xyz + qrot(aBQ, position) * aB.w * uScale;
  vCol = aBC;
  vE = aBE;
  float on = step(0.002, aBE.x) * step(0.05, aB.w);
  gl_Position = on > 0.5 ? projectionMatrix * viewMatrix * vec4(vW, 1.0) : vec4(2.0, 2.0, 2.0, 1.0);
}
`

const NOISE = /* glsl */ `
float hash3(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float vnoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash3(i), hash3(i + vec3(1.0, 0.0, 0.0)), f.x), mix(hash3(i + vec3(0.0, 1.0, 0.0)), hash3(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
    mix(mix(hash3(i + vec3(0.0, 0.0, 1.0)), hash3(i + vec3(1.0, 0.0, 1.0)), f.x), mix(hash3(i + vec3(0.0, 1.0, 1.0)), hash3(i + vec3(1.0, 1.0, 1.0)), f.x), f.y),
    f.z);
}
float fbm4(vec3 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    s += a * vnoise(p);
    p = p * 2.03 + vec3(1.7, 9.2, 3.1);
    a *= 0.5;
  }
  return s / 0.9375;
}
float fbm3(vec3 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    s += a * vnoise(p);
    p = p * 2.11 + vec3(5.3, 1.3, 7.7);
    a *= 0.5;
  }
  return s / 0.875;
}
`

export const PLANET_FRAG = /* glsl */ `
precision highp float;
uniform vec3 uOrb;
uniform float uTime;
varying vec3 vObj;
varying vec3 vN;
varying vec3 vW;
varying vec4 vCol;
varying vec4 vE;
${NOISE}
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vW);
  vec3 L = normalize(uOrb - vW);
  vec3 col = vCol.rgb;
  float act = vCol.a;
  float seed = vE.w;
  vec3 o = normalize(vObj);

  // continents: 4-octave value noise on the object-space sphere (spins with the body)
  vec3 p = o * 2.1 + vec3(seed * 17.0, seed * 31.0, seed * 7.0);
  float h = fbm4(p + 0.35 * vec3(vnoise(p * 1.9 + 4.0), vnoise(p * 1.9 + 9.0), vnoise(p * 1.9 + 13.0)));
  float land = smoothstep(0.5, 0.56, h);
  float high = smoothstep(0.6, 0.78, h);
  float coast = 1.0 - smoothstep(0.0, 0.035, abs(h - 0.53));

  // cloud band: streaks stretched along latitude, densest in two belts, drifting slowly over the surface
  float lat = o.y;
  float lon = atan(o.z, o.x);
  vec3 cp = vec3(cos(lon + uTime * 0.04) * 1.6, lat * 6.5, sin(lon + uTime * 0.04) * 1.6) + seed * 11.0;
  float cl = fbm3(cp);
  float belt = 0.35 + 0.65 * smoothstep(0.32, 0.0, abs(abs(lat) - 0.38 - 0.06 * sin(seed * 20.0)));
  float clouds = smoothstep(0.52, 0.72, cl) * belt;

  vec3 ocean = col * 0.2 + vec3(0.012, 0.018, 0.06);
  vec3 ground = mix(col * 0.55 + vec3(0.02, 0.03, 0.05), mix(col, vec3(1.0), 0.18) * 0.85, high);
  vec3 alb = mix(ocean, ground, land);
  alb += col * coast * 0.12;
  alb = mix(alb, mix(col, vec3(1.0), 0.55) * 0.95, clouds * 0.75);

  // terminator lighting: the orb is the light; soft wrap, a warm-ish band at the terminator, faint night emissive
  float ndl = dot(N, L);
  float lit = smoothstep(-0.12, 0.6, ndl);
  float term = exp(-ndl * ndl / 0.018) * 0.12;
  vec3 night = alb * 0.2 + col * (0.05 + 0.05 * act) + col * land * 0.05 * act;
  vec3 c = mix(night, alb * 1.08, lit) + mix(col, vec3(1.0, 0.75, 0.5), 0.3) * term * lit;

  // core pulse (2D inner core L1621) and light (hit/flash/hover/nova, L1528) as emissive toward the centre
  float nv = clamp(dot(N, V), 0.0, 1.0);
  c += mix(col, vec3(1.0), 0.2) * (vE.y * 0.22 * nv * nv + vE.z * 0.25);

  // dim overall (labels sit next to it) and scale by activity
  c *= 0.6 + 0.4 * act;

  // fresnel rim (2D rim: col @ 0.2 + 0.2 act), brighter on the lit side
  float fr = pow(1.0 - nv, 3.0);
  c += mix(col, vec3(1.0), 0.25) * fr * (0.25 + 0.75 * smoothstep(-0.35, 0.6, ndl)) * (0.35 + 0.45 * act);

  gl_FragColor = vec4(c, vE.x);
}
`

/** Atmosphere shell radius in body radii. */
export const ATMO_SCALE = 1.16

export const ATMO_FRAG = /* glsl */ `
precision highp float;
uniform vec3 uOrb;
varying vec3 vObj;
varying vec3 vN;
varying vec3 vW;
varying vec4 vCol;
varying vec4 vE;
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vW);
  vec3 L = normalize(uOrb - vW);
  // back faces of the shell: |N.V| -> projected radius fraction u of the shell; the body limb sits at 1 / ATMO_SCALE
  float d = dot(N, V);
  float u = sqrt(max(0.0, 1.0 - d * d));
  float inner = ${(1 / ATMO_SCALE).toFixed(5)};
  float g = clamp((1.0 - u) / (1.0 - inner), 0.0, 1.0);
  g = g * g * (3.0 - 2.0 * g);
  g *= g;
  float lit = 0.18 + 0.82 * smoothstep(-0.45, 0.55, dot(N, L));
  float act = vCol.a;
  vec3 c = mix(vCol.rgb, vec3(1.0), 0.3) * g * lit * (0.25 + 0.5 * act + vE.z * 0.3) * vE.x;
  if (max(c.r, max(c.g, c.b)) < 0.002) discard;
  gl_FragColor = vec4(c, 1.0);
}
`
