class C {
  _length: number = 0;
  get length(): number {
    return this._length;
  }
  set length(value: number) {
    this._length = Number(value);
  }
}

const c: C = new C();
c.length = 5;
console.log(c);
