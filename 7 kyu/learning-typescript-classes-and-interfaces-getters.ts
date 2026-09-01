export class Cuboid {
  constructor(
    public length: number,
    public width: number,
    public height: number,
  ) {}

  get surfaceArea(): number {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }

  get volume(): number {
    return this.length * this.width * this.height;
  }
}

export class Cube extends Cuboid {
  constructor(sideLength: number) {
    super(sideLength, sideLength, sideLength);
  }
}
