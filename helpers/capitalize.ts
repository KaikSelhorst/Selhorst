export default (str: string) => {
  const cap = (s: string) => (s[2] ? s[0].toUpperCase() + s.slice(1) : s);
  return str.split(" ").map(cap).join(" ");
};
