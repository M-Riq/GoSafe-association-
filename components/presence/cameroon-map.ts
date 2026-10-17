/**
 * Simplified Cameroon outline (lon, lat), clockwise from the Lake Chad tip.
 * Approximate, for a stylized illustration only — not a cartographic reference.
 */
const outline: [number, number][] = [
  [14.17, 13.08], [14.55, 12.75], [14.85, 12.35], [15.05, 12.05], [15.05, 11.5], [15.15, 11.0],
  [15.3, 10.4], [15.68, 9.95], [14.9, 9.75], [14.2, 9.55], [14.35, 9.1], [14.85, 8.65],
  [15.25, 8.1], [15.5, 7.55], [15.15, 7.1], [14.75, 6.4], [14.5, 5.95], [14.55, 5.2],
  [14.6, 4.4], [15.1, 3.6], [15.95, 3.0], [16.2, 2.4], [16.05, 1.95], [15.6, 1.95],
  [15.0, 2.0], [14.0, 2.2], [13.2, 2.25], [12.4, 2.25], [11.35, 2.2], [10.6, 2.2],
  [9.82, 2.35], [9.9, 3.0], [9.75, 3.55], [9.65, 3.95], [9.3, 3.95], [8.95, 4.15],
  [8.65, 4.5], [8.5, 4.7], [8.8, 5.2], [8.9, 5.8], [9.4, 6.3], [9.8, 6.6],
  [10.2, 6.9], [10.6, 7.0], [11.0, 6.5], [11.5, 6.9], [11.8, 7.2], [11.9, 7.9],
  [12.2, 8.4], [12.45, 8.6], [12.8, 8.8], [12.95, 9.5], [13.25, 10.1], [13.5, 10.6],
  [13.85, 11.05], [14.0, 11.5], [14.2, 12.0], [14.2, 12.4], [14.08, 12.85],
];

const SCALE = 40;
const LON_0 = 8.3;
const LAT_0 = 13.2;

export const MAP_WIDTH = 320;
export const MAP_HEIGHT = 460;

export function project(lon: number, lat: number) {
  return { x: (lon - LON_0) * SCALE, y: (LAT_0 - lat) * SCALE };
}

export const cameroonPath =
  outline
    .map(([lon, lat], i) => {
      const { x, y } = project(lon, lat);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ") + " Z";
