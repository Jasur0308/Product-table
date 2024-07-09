// DOM (DOCUMENT OBJECT MODEL) TRAVERSING

// const form = document.getElementById("form");
// const nameInput = form.querySelector("#nameInput");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(nameInput.value);
// })



// NODE VS ELEMENT

// NODE => element, text, comment, ... (all 8)

// const $box = document.querySelector(".box");
// const $item = document.querySelector(".item");

// console.log($box.firstElementChild);    //1-element child
// console.log($box.lastElementChild);     //last element child
// console.log($box.firstChild);   //1-node
// console.log($box.lastChild);    //last node
// console.log(Array.from($box.children));     //elemetnlarni
// console.log(Array.from($box.childNodes));       //nodelarni
// console.log($item.parentElement);



// SWAPPING

// let x = 5;
// let y = 8;

// [x, y] = [y, x];

// console.log(x);
// console.log(y);