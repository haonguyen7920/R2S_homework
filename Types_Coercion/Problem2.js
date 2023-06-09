function swap(a, b) {
  var tmp = a;
  a = b;
  b = tmp;
  //   x = a;
  //   y = b;
}
var x = 1;
var y = 2;
swap(x, y);
console.log(x);
// Output: 1 (vì x và y chưa được gán giá trị sau khi thực hiện hàm swap())
