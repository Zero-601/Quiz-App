const quiz_content = document.getElementsByClassName("quiz-content")[0];

const quiz_component = (data, i) => {
  let multiple = [...data.incorrect_answers, data.correct_answer];
  return `<div class="quiz-area">
    <h4> ${i + 1}. ${data.question}</h4>
    <div>${multiple.map((data) => `<button>${data}</button>`)}</div>
    </div>`;
};

export const response = async () => {
  return await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let component = data.results.map((value, i) => {
        return quiz_component(value, i);
      });
      quiz_content.innerHTML = component.join(" ");
    })
    .catch((e) => {
      setTimeout(
        () => (alert(e.message) == undefined ? location.reload() : null),
        3000
      );
    });
};
