function empty(o) {
  o = null;
  // x = o;
}
var x = [];
empty(x);
console.log(x);
// Output: [] (vì x chưa được gán giá trị null sau khi thực hiện hàm empty())
