// class IndexSig {
//   [s: string]: boolean | ((s: string) => boolean);
//   check(s: string) {
//     return this[s] as boolean;
//   }
// }

// const t: IndexSig = new IndexSig();

class Idx {
  val: number[];
  dic: { [s: string]: string };
  constructor() {
    this.val = [5, 4, 3, 2, 1];
    this.dic = { cow: 'cow', lamb: 'lamb' };
  }
  check(s: number) {
    return this.val[s];
  }
  dics(s: string): string {
    return this.dic[s];
  }
}
export const d: Idx = new Idx();
console.log(d.check(0));
console.log(d.dics('cow'));
