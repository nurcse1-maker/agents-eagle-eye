/** Colour types and the design's palette. The one definition for everything under web/. */

export type RGB = [number, number, number];

export type AgentIcon =
  | 'doc' | 'search' | 'code' | 'mail' | 'chart' | 'image' | 'bell'
  | 'globe' | 'pencil' | 'api' | 'gear' | 'database' | 'check';

/** The design's accent colour, by icon (RGB 0-255). hooks/mini.ts keeps a hex copy; tests assert they match. */
export const ICON_COLOR: Record<AgentIcon, RGB> = {
  doc: [52, 150, 255],
  search: [40, 175, 255],
  code: [178, 82, 255],
  mail: [150, 160, 235],
  chart: [255, 168, 52],
  image: [52, 242, 112],
  bell: [150, 160, 235],
  globe: [150, 226, 255],
  pencil: [52, 172, 255],
  api: [150, 160, 235],
  gear: [88, 255, 82],
  database: [255, 162, 52],
  check: [255, 172, 62],
}

/** Dust-field palette (blue-biased by index). */
export const DUST_PALETTE: RGB[] = [
  [70, 150, 255], [170, 90, 255], [255, 170, 70], [70, 255, 150], [120, 230, 255], [235, 240, 255],
];
