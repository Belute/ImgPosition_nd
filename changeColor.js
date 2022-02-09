

let test = document.getElementById("img");
let test1 = document.getElementById("text1");
let test2 = document.getElementById("text2");
let test3 = document.getElementById("text3");

document.getElementById("btn").onclick = function () {
    test.style.left = "170px";
};

document.getElementById("btn1").onclick = function () {
    test.style.left = "1200px";
};

document.getElementById("btn2").onclick = function () {
    test.classList.toggle("visible");
};

document.getElementById("btn3").onclick = function () {
    test.style.bottom = "-100px";
    test1.style.bottom = "100px";
    test2.style.bottom = "100px";
    test3.style.bottom = "100px";
};

document.getElementById("btn4").onclick = function () {
    test.style.bottom = "350px";
    test.style.left = "1200px";
    test1.style.bottom = "0px";
    test2.style.bottom = "0px";
    test3.style.bottom = "0px";
};