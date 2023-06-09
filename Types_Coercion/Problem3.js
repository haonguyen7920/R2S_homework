function reverse(s) {
  var newString = "";
  s.split("_").map((str) => {
    newString += str.charAt(0).toUpperCase() + str.slice(1);
  });
  console.log(newString);
}
reverse("user_name");
