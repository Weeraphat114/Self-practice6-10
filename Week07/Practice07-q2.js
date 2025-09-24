/* Exercise 2
Fruits List with forEach, createElement, appendChild */
const fruits = ["Apple", "Banana", "Mango"];
const container = document.getElementById("fruits-list")
const ul = document.createElement("ul")
fruits.forEach((fruit) => {
    const li = document.createElement("li")
    li.textContent = fruit
    ul.appendChild(li)
})
container.appendChild(ul)