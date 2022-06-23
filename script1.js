
let ttl = document.getElementsByClassName("ttle");
console.log(ttl[2].innerText);
var img1 = document.getElementsByTagName('img');
console.log(img1[2], "img");
let pric = document.getElementsByClassName("price");
const prices = pric[0].innerText.split(" ");
console.log("текущая цена", prices[0]);
console.log("цена до акции", prices[1]);

