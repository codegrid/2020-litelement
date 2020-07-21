export const insertHeadToTail = (v) => {
  const [head, ...rest] = v;
  return [...rest, head];
}
