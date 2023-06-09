var calculator = {
  value: 0,
};
function display() {
  console.log("Giá trị value hiện tại:", calculator.value);
}
function add(x) {
  calculator.value += x;
  display();
}
function subtract(x) {
  calculator.value -= x;
  display();
}
function divide(x) {
  calculator.value /= x;
  display();
}
function multiply(x) {
  calculator.value *= x;
  display();
}
// display();
// add(4);
// subtract(5);
// add(7);
// divide(2);
// multiply(4);
