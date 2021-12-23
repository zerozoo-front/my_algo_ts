let arr: number[] = [0];
let count = 0;
function addBack(num: number) {
  arr[count] = num;
  count++;
}
function addFirst(num: number) {
  for (let i = count; i >= 1; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = num;
  count++;
}
function show() {
  for (let i = 0; i < count; i++) {
    console.log('%d ', arr[i]);
  }
}

addFirst(1);
addBack(3);
addFirst(2);
show();
