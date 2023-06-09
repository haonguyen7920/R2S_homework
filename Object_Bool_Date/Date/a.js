function calculateAge(x) {
  var today = new Date();
  var age = today.getFullYear() - x;
  console.log(age);
}
calculateAge(1998);
