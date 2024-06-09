const start_btn = document.getElementsByClassName("btn-start")[0];
const popup_box = document.getElementsByClassName("box-difficulty ")[0];
const popup_area = document.getElementsByClassName("popup-area")[0];
const back_btn = document.getElementsByClassName("back-btn")[0];

start_btn.addEventListener("click", (event) => {
  popup_area.style.display = "flex";
  popup_box.style.display = "flex";

  back_btn.addEventListener("click", () => {
    popup_area.style.display = "none";
    popup_box.style.display = "none";
  });
});
