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

let contentHTML = "";
myQuestions.forEach((item, index) => {
  let content = `<p>Câu ${index + 1}:</p>
  <p>${item.question}</p>
  <input type="radio" name="answer${index}" id="a${index}" value="a" />&nbsp<label name="${index}" for="a${index}">${
    item.answers.a
  }</label><br />
  <input type="radio" name="answer${index}" id="b${index}" value="b"/>&nbsp<label name="${index}" for="b${index}">${
    item.answers.b
  }</label><br />
  <input type="radio" name="answer${index}" id="c${index}" value="c"/>&nbsp<label name="${index}" for="c${index}">${
    item.answers.c
  }</label><br />
  <input type="radio" name="answer${index}" id="d${index}" value="d"/>&nbsp<label name="${index}" for="d${index}">${
    item.answers.d
  }</label>
  `;
  contentHTML += content;
});

contentHTML += `<br /><br /><button onclick="handleSubmit()" style="padding: 7px">Nộp bài</button>
<p id="result" style="color: red; font-weight: bold"></p>
`;
document.getElementById("form").innerHTML = contentHTML;

let showAnswers = () => {
  let labelAll = document.querySelectorAll("label");
  labelAll.forEach((item) => {
    item.setAttribute("style", "color: black; font-weight: normal");
  });

  myQuestions.forEach((item, index) => {
    let checked = document.querySelector(
      `input[name="answer${index}"]:checked`
    ).value;
    document
      .querySelector(`label[for=${checked}${index}]`)
      .setAttribute("style", "color: red; font-weight: bold");

    document
      .querySelector(`label[for=${item.correctAnswer}${index}]`)
      .setAttribute("style", "color: green; font-weight: bold");
  });
};

let handleSubmit = () => {
  let sumQuestions = myQuestions.length;
  let count = 0;
  for (let i = 0; i < sumQuestions; i++) {
    let checked = document.querySelector(`input[name="answer${i}"]:checked`);
    if (checked == null) {
      return alert("Vui lòng trả lời tất cả câu hỏi!");
    }
    if (checked.value == myQuestions[i].correctAnswer) {
      count++;
    }
  }
  let score = (10 / sumQuestions) * count;
  document.getElementById("result").innerText = `Điểm của bạn là: ${score}`;
  window.scrollTo(0, document.body.scrollHeight);
  showAnswers();
};
