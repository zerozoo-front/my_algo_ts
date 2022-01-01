export class Point {
  x = 10;
  y = 10;
  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

const pt = new Point();
pt.scale(5);
console.log(pt);
