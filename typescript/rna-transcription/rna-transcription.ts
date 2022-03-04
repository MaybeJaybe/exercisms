export function toRna(sequence: string): string {
  const transcriptions: { [index: string]: string} = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};
  if (/[^GCTA]/.test(sequence)) {
    throw 'Invalid input DNA.'
  }
  return [...sequence].map((nucleo: string) => transcriptions[nucleo]).join('');
}
