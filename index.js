import "./fetch.js";

const name_input = document.getElementsByClassName("name-input")[0];
window.onload = () => {
  name_input.value = "";
};
let data = { id: 0, nama: "" };

name_input.addEventListener("input", (event) => {
  data.nama = event.target.value;
});

document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem(Date.now(), JSON.stringify({ ...data, id: Date.now() }));
  name_input.value = "";
});
