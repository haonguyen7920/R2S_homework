var person = {
  name: "Hao",
  age: "25",
  occupation: "coding",
};
function displayInformation() {
  for (prop in person) {
    console.log(prop, person[prop]);
  }
}
displayInformation();
