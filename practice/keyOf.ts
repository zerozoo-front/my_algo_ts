interface Person {
  name: string;
  age: number;
  location: string;
}
type k1 = keyof Person;
type k2 = keyof Person[];
type k3 = keyof { [x: string]: Person };

type p1 = Person['name'];
type p2 = Person['name' | 'age'];
type p3 = string['charAt'];
type p4 = string[]['push'];
type p5 = string[][0];

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const A: { a: number; b: string } = { a: 10, b: 't' };
let _a: number = getProperty(A, 'a');
let _b: string = getProperty(A, 'b');
console.log('_a: ', _a);
console.log('_b: ', _b);

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProperty(A, 'b', 'starship!');
console.log('A: ', A);
