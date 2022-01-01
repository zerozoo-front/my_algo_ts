export class Gretter {
  readonly afterName: string = 'world!';
  name: string = '';

  constructor(name?: string) {
    if (name !== undefined) {
      this.name = name + this.afterName;
    }
  }

  err() {
    throw new Error();
  }
}
const hello = new Gretter();
console.log(hello);
