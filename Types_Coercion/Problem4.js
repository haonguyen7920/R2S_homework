function mul(a, b) {
  var x = BigInt(a) * BigInt(b);
  console.log(x.toString());
}
mul("12345678910111213", 89);
// Số cực lớn phải chuyển sang string
// Phép tính phải cùng kiểu dữ liệu
