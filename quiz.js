const quiz_content = document.getElementsByClassName("quiz-content")[0];

const quiz_component = (data, i) => {
  return `<div class="quiz-area">
    <h4> ${i + 1}. ${data.question}</h4>
    
  </div>`;
};

fetch(
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
)
  .then((res) => res.json())
  .then((data) => {
    let component = data.results.map((value, i) => {
      console.log(value);
      return quiz_component(value, i);
    });
    quiz_content.innerHTML = component.join(" ");
  })
  .catch((e) => {
    setTimeout(
      () =>
        alert("Terjadi Kesalahan") == undefined ? location.reload() : null,
      3000
    );
  });
