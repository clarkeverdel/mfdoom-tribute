export const distance = (
  x1: number,
  x2: number,
  y1: number,
  y2: number
) => {
  let a = x1 - x2;
  let b = y1 - y2;
  return Math.hypot(a,b);
};

export const lineEq = (y2: number, y1: number, x2: number, x1: number, currentVal: number) => {
  // y = mx + b
  let m = (y2 - y1) / (x2 - x1);
  let b = y1 - m * x1;
  return m * currentVal + b;
};

export const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
