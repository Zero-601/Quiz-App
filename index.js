import "./quiz.js";
import "./event_menu.js";

const name_input = document.getElementsByClassName("name-input")[0];
const form = document.getElementsByTagName("form")[0];

if (localStorage.length == 1) {
  const name = JSON.parse(localStorage.getItem(localStorage.key(0))).nama;
  form.innerHTML = `<p>Welcome Back <b>${name}!</b></p>`;
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
