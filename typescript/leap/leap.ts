export function isLeap(year: number): boolean {
  const isDivisible = (n: number) => year % n === 0
  return (isDivisible(4) && !isDivisible(100)) || isDivisible(400)
}