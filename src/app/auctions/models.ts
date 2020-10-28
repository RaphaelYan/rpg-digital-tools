// 100 Copper = 1 Silver, 100 Silver = 1 Gold
// ex : 19700 = 1 Gold and 97 Silver

export const valueToPrice = (value) => {
  // 100 Copper = 1 Silver, 100 Silver = 1 Gold

  const gold = Math.floor(value / 100 / 100);
  value = value - gold * 100 * 100;

  const silver = Math.floor(value / 100);
  value = value - silver * 100;

  const copper = value;

  return `${gold}g ${silver}s ${copper}c`;
};
