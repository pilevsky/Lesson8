let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector('.btn3');
let div = document.querySelector(".element");
div.style.width = "100px";
div.style.height = "100px";
// div.style.borderWidth = "5px";
div.style.borderStyle = "solid";
// div.style.borderColor = "black";
btn1.onclick = function () {
  div.style.width = "200px";
  div.style.height = "200px";
};
btn2.onclick = function () {
  div.classList.add("element1");
  div.classList.add("element2");
  div.classList.add('element3')
};
btn3.onclick = function () {
  div.classList.remove('element2');
}