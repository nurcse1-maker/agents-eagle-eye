const pad2 = (n: number) => (n < 10 ? '0' + n : '' + n);

export function fmtTokens(n: number) {
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1000) return Math.floor(n / 1000) + 'K';
  return String(Math.floor(n));
}

export function fmtTime(sec: number) {
  const s = Math.floor(sec);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
  if (h > 0) return `${h}:${pad2(m)}:${pad2(s % 60)}`;
  return `${m}:${pad2(s % 60)}`;
}
