/* 1. Exercise 1
Task:
Create a button that, when clicked, changes the text of a paragraph.
Steps / Hints
Create an HTML page with a <div> and  <p>.
 use document.getElementById() or querySelector() to select the paragraph.
and use textContent, include change color to green.*/

const divElement = document.getElementById("container")
const pElement = document.createElement("p")
pElement.setAttribute("mytext", "Welcome")
pElement.setAttribute("style", "color: green")
pElement.textContent = 'Welcome'   
divElement.appendChild(pElement)




