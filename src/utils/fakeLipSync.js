const phonemeMap = {
  a: "aa",
  b: "PP",
  c: "CH",
  d: "DD",
  e: "E",
  f: "FF",
  g: "CH",
  h: "CH",
  i: "I",
  j: "CH",
  k: "kk",
  l: "E",
  m: "PP",
  n: "nn",
  o: "O",
  p: "PP",
  q: "kk",
  r: "RR",
  s: "SS",
  t: "TH",
  u: "U",
  v: "FF",
  w: "U",
  x: "SS",
  y: "I",
  z: "SS",
};

export function generateFakeLipSync(text) {
  const letters = text.toLowerCase().replace(/[^a-z]/g, "").split("");
  let time = 0;
  const duration = 0.09;

  return letters.map((char) => {
    const value = phonemeMap[char] || "aa";
    const entry = {
      start: parseFloat(time.toFixed(2)),
      end: parseFloat((time + duration).toFixed(2)),
      value,
    };
    time += duration;
    return entry;
  });
}
