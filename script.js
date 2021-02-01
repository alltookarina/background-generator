var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");

function randomGradient() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    color3.value = getRandomColor();
    setGradient();
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addRandomButton() {
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Generate Random Color");
    btn.appendChild(t);
    document.body.appendChild(btn);
    btn.onclick = randomGradient;
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ", "
    + color3.value
    + ")";

    css.textContent = "linear-gradient(to right, "
    + color1.value
    +", "
    + color2.value
    + ", "
    + color3.value
    + ")";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
window.addEventListener("load", randomGradient);
addRandomButton();