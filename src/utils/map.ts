const level1 = [
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1],
];

let map: Array<any> = [];

for (let y = 0; y < level1.length; y++) {
  for (let x = 0; x < level1[0].length; x++) {
    map.push({
      value: level1[y][x],
      x: x * 32,
      y: y * 32,
      width: 32,
      height: 32,
    });
  }
}
export default map;
