const earthSeconds = 31557600;
const orbitalPeriods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}
type planetOrbit = keyof typeof orbitalPeriods;
export function age(planet: planetOrbit, seconds: number): number {
  return parseFloat((seconds / (orbitalPeriods[planet] * earthSeconds)).toFixed(2));
}
