/* Exercise 3
Tasks:
Select the wrapper div.
Access its first child element and log its nodeName.
Access the next sibling of the first <p> and log its text.
(Hint: firstElementChild, nextElementSibling, nodeName) */
const divElement = document.getElementById("wrapper")

Array.from(divElement).forEach((child) => console.log(child))
console.log(divElement.firstElementChild.nodeName);

const nextFirstPElement = divElement.querySelector('p')
console.log(nextFirstPElement.nextElementSibling.textContent);
console.log(nextFirstPElement.nodeName);



