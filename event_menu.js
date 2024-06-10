import { response } from "./quiz.js";
const start_btn = document.getElementsByClassName("btn-start")[0];
const popup_box = document.getElementsByClassName("box-difficulty ")[0];
const popup_area = document.getElementsByClassName("popup-area")[0];

const box_difficulty = document.getElementsByClassName("box-difficulty")[0];
const box_quiz = document.getElementsByClassName("box-quiz")[0];

const back_btn = document.getElementsByClassName("back-btn")[0];
const close_btn = document.getElementsByClassName("close-btn")[0];
const easy_btn = document.getElementsByClassName("easy-btn")[0];

start_btn.addEventListener("click", (event) => {
  popup_area.style.display = "flex";
  box_difficulty.style.display = "flex";

  back_btn.addEventListener("click", () => {
    popup_area.style.display = "none";
    box_difficulty.style.display = "none";
  });

  easy_btn.addEventListener("click", () => {
    box_difficulty.style.display = "none";
    box_quiz.style.display = "flex";
    response();

    close_btn.addEventListener("click", () => {
      popup_area.style.display = "none";
      box_quiz.style.display = "none";
    });
  });
});
