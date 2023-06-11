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
  let content = `<div id="question${index}" style="display: none">
  <p>Câu ${index + 1}:</p>
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
  </div>
  `;
  contentHTML += content;
});

let form = document.getElementById("form");
form.innerHTML = contentHTML;
form.style.border = "1px solid black";
form.style.width = "500px";
form.style.margin = "0 auto";
form.style.padding = "10px";

let id = 0;
document.getElementById(`question${id}`).style.display = "block";

let handleNextQuestion = () => {
  let checked = document.querySelector(`input[name="answer${id}"]:checked`);
  if (checked == null) {
    return alert("Vui lòng trả lời câu hỏi!");
  }
  id++;
  document.getElementById(`question${id}`).style.display = "block";
  document.getElementById(`question${id - 1}`).style.display = "none";
  if (id == myQuestions.length - 1) {
    document.getElementById("btn").style.display = "none";
    document.getElementById("submit").style.display = "flex";
  }
};

let handlePrevQuestion = () => {
  id--;
  if (id >= 0) {
    document.getElementById(`question${id}`).style.display = "block";
    document.getElementById(`question${id + 1}`).style.display = "none";
  } else id = 0;
};

let handleSend = () => {
  let checked = document.querySelector(`input[name="answer${id}"]:checked`);
  if (checked == null) {
    return alert("Vui lòng trả lời câu hỏi!");
  }
  let sumQuestions = myQuestions.length;
  let count = 0;
  for (let i = 0; i < sumQuestions; i++) {
    let checked = document.querySelector(`input[name="answer${i}"]:checked`);
    if (checked.value == myQuestions[i].correctAnswer) {
      count++;
    }
  }
  let point = (10 / sumQuestions) * count;
  document.getElementById("result").innerText = `Điểm của bạn là: ${point}`;
};
