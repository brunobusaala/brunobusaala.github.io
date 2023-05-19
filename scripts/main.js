const btn = document.getElementById("btn");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
const result4 = document.getElementById("result4");
const fnumber = document.getElementById("fnumber");
const snumber = document.getElementById("snumber");
const myImage = document.querySelector("img");
let myButton = document.getElementById("btn2");
let myHeading = document.querySelector("h1");

const myF = (event) => {
  event.preventDefault();
  let mySum = parseInt(fnumber.value) + parseInt(snumber.value);
  if (mySum % 2 == 0) {
    result2.innerHTML = "Based on Addition the result is an even number";
  } else {
    result2.innerHTML = "Based on Addition the result an odd number";
  }
  result.innerHTML = mySum;
};
const multiplyNo = () => {
  let myNumber = parseInt(fnumber.value) * parseInt(snumber.value);
  if (myNumber % 2 == 0) {
    result4.innerHTML = "Based on multiplication the result an even number";
  } else {
    result4.innerHTML = "Based on multiplication the result an odd number";
  }
  result3.innerHTML = myNumber;
};
fnumber.addEventListener("change", multiplyNo);
snumber.addEventListener("change", multiplyNo);

btn.addEventListener("mouseover", myF);

const myHeader = document.querySelector("h1");
myHeader.textContent = "Hello World!";

let myNumber = "My html has been modified from here:";
const myp = document.querySelector("h2");
myp.textContent = myNumber;

const multiply = (num1, num2, num3) => {
  return num1 * num2 * num3;
};
const myV = document.querySelector("h3");
myV.textContent = multiply(500, 2, 7);

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/manchestor.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

const setUserName = () => {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Programming is cool, ${myName}`;
  }
};
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Programming is cool, ${storedName}`;
}
myButton.addEventListener("click", setUserName);
