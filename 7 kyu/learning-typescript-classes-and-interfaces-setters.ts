declare var ICuboid: {
  new (length: number): ICuboid;
};

interface ICuboid {
  /** Length of the cube */
  length: number;
  /** Surface area of the cube */
  surfaceArea: number;
  /** Volume of the cube */
  volume: number;
}

export class Cube implements ICuboid {
  constructor(public length: number) {}

  get surfaceArea(): number {
    return 6 * this.length ** 2;
  }

  set surfaceArea(value: number) {
    this.length = Math.sqrt(value / 6);
  }

  get volume(): number {
    return this.length ** 3;
  }

  set volume(value: number) {
    this.length = Math.cbrt(value);
  }
}

console.log(new Cube(1).surfaceArea); // 6
console.log(new Cube(1).volume); // 1
console.log((new Cube(1).surfaceArea = 24)); // 24
console.log((new Cube(1).volume = 8)); // 8
console.log(new Cube(1).surfaceArea); // 6
console.log(new Cube(1).volume); // 1
console.log((new Cube(1).surfaceArea = 24)); // 24
console.log((new Cube(1).volume = 8)); // 8
