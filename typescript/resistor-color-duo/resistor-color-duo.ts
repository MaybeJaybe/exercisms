export function decodedValue(values: Array<string>) {
  const colorArray = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];
  const firstBand = colorArray.indexOf(values[0], 0);
  const secondBand = colorArray.indexOf(values[1], 0);
  return (firstBand*10+secondBand);
}
