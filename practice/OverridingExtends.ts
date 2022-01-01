export class Human {
  greet(): void {
    console.log('Hello, world!');
  }
}

class Zoo extends Human {
  greet(name?: string): void {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}!`);
    }
  }
}

const d: Zoo = new Zoo();
d.greet();
d.greet('zoo');
