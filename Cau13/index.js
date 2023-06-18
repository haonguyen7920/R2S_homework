const classes = [
  ["Chemistry", "9AM", "Mr. Darnick"],

  ["Physics", "10:15AM", "Mrs. Lithun"],

  ["Math", "11:30AM", "Mrs. Vitalis"],
];

const classesAsObject = classes.map((item) => ({
  subject: item[0],
  time: item[1],
  teacher: item[2],
}));
