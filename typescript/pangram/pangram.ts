export function isPangram(pangram: string): boolean {
  return (pangram.toLowerCase().match(RegExp(/([a-z])(?!.*\1)/g)) || []).length === 26;
}
