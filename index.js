import "./quiz.js";
import "./event_menu.js";

const name_input = document.getElementsByClassName("name-input")[0];
const form = document.getElementsByTagName("form")[0];

if (localStorage.length != 0) {
  console.log("test");
  const name = JSON.parse(localStorage.getItem(localStorage.key(0))).nama;
  form.innerHTML = `<div class="name-area">
    <p>Welcome Back <b>${name}!</b></p>
    <button class="change-btn">Change name</button>
  </div>`;
  document
    .getElementsByClassName("change-btn")[0]
    .addEventListener("click", (e) => {
      form.innerHTML = `<input type="text" placeholder="Input Your Name Here : " class="name-input">
            <button class="submit-btn" type="submit">Submit</button> 
            <button class="back-btn">Back</button>`;
    });
}

window.onload = () => {
  name_input.value = "";
};
let data = { id: 0, nama: "" };

name_input.addEventListener("input", (event) => {
  data.nama = event.target.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem(Date.now(), JSON.stringify({ ...data, id: Date.now() }));
  name_input.value = "";
});
