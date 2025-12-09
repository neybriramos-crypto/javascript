/**
 * DOM Manipulation
 *
 * Refers to the methods and techniques used to dynamically access
 * and update the content, structure, and style of a web document.
 */

// Accessing DOM Elements (Selectors)

let pharagraph = document.querySelector("p"); // The most versatile and commonly used selector

let mainHeading = document.getElementById("main-heading");
let qwerty = document.getElementsByName("qwerty");
let divs = document.getElementsByClassName("bg-green-500");
let lis = document.getElementsByTagName("li");

// Modifying DOM Elements

mainHeading.style.color = "blue";
mainHeading.textContent = "Updated Heading via DOM";

for (let div of divs) {
  div.innerHTML = `
    <p class="text-white text-xl">This is a pharagraph created by unholy methods</p>
  `;
}

// Creating and Inserting DOM Elements

function createListItem(list, text) {
  let li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

// Adding Event Listeners

const button = document.querySelector("#add-button");

button.addEventListener("click", () => {
  let ul = document.querySelector("#main-list");
  let input = document.querySelector("#name");

  let existingAlert = document.querySelector("#alert-message");
  if (existingAlert) {
    existingAlert.remove();
  }

  if (input.value.trim() === "") {
    let alert = document.createElement("p");

    alert.id = "alert-message";
    alert.textContent = "Please enter a valid item.";
    alert.classList.add("text-red-500", "mt-2", "text-sm");

    button.insertAdjacentElement("afterend", alert);
    return;
  }

  createListItem(ul, input.value);
  input.value = "";
});

let divList = document.querySelectorAll(".bg-green-500");

const btnChangeColor = document.querySelector("#btn-change-color");
btnChangeColor.addEventListener("click", () => {
  let select = document.querySelector("#div-selector");

  let index = parseInt(select.value) - 1;
  let targetDiv = divList[index];

  console.log("Selected Div Index:", index);
  console.log("Classes:", targetDiv.classList);

  targetDiv.classList.toggle("bg-green-500");
  targetDiv.classList.toggle("bg-blue-500");

  console.log("Updated Classes:", targetDiv.classList);
});