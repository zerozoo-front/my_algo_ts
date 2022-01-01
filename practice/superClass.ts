class Base {
  k = 4;
}
class Derived extends Base {
  constructor() {
    super();
    console.log(this.k);
  }
}
const d = new Derived();
console.log(d);
