var myQuestions = [
  {
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    correctAnswer: "c",
  },
];

var contentHTML = "";
myQuestions.forEach((item, index) => {
  var content = `<p>Câu ${index + 1}:</p>
  <p>${item.question}</p>
  <input type="radio" name="answer${index}" id="a${index}" value="a" />&nbsp<label for="a${index}">${
    item.answers.a
  }</label><br />
  <input type="radio" name="answer${index}" id="b${index}" value="b"/>&nbsp<label for="b${index}">${
    item.answers.b
  }</label><br />
  <input type="radio" name="answer${index}" id="c${index}" value="c"/>&nbsp<label for="c${index}">${
    item.answers.c
  }</label><br />
  <input type="radio" name="answer${index}" id="d${index}" value="d"/>&nbsp<label for="d${index}">${
    item.answers.d
  }</label>
  `;
  contentHTML += content;
});
contentHTML += `<br /><br /><button onclick="handleSubmit()" style="padding: 7px">Nộp bài</button>
<p id="result" style="color: red"></p>
`;
document.getElementById("form").innerHTML = contentHTML;

let handleSubmit = () => {
  var sumQuestions = myQuestions.length;
  var count = 0;
  for (let i = 0; i < sumQuestions; i++) {
    var checked = document.querySelector(`input[name="answer${i}"]:checked`);
    if (checked.value == myQuestions[i].correctAnswer) {
      count++;
    }
  }
  var point = (10 / sumQuestions) * count;
  document.getElementById("result").innerText = `Điểm của bạn là: ${point}`;
  window.scrollTo(0, document.body.scrollHeight);
};
