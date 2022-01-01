class Name {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  callName(): string {
    return this.name;
  }
}
const zoo: Name = new Name('zoo');
console.log('zoo: ', zoo.callName());
class Human {
  name: Name;
  constructor(name: string) {
    this.name = new Name(name);
  }
}
const zoo2: Human = new Human('zoo2');
console.log('zoo2: ', zoo2.name);

export { Human };
