import { addQuote, getAllQuotes  } from "./quote.js"

// Step 1: Create an array to hold quote objects
let quotes = []
// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById('quote-list')
const quoteChild = quoteList.children
// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function renderQuotes() {
    Array.from(quoteChild).forEach((quote) => {
    quoteList.removeChild(quote)
    })

    let quotes = getAllQuotes()
    
    quotes.forEach((ele) => {
        const pElement = document.createElement('p')
        pElement.textContent = `"${ele.content}" - ${ele.author}`   
        quoteList.appendChild(pElement)
    })
    
}
// Step 4: Add test quotes manually and call renderQuotes()
// Example:
// addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
// renderQuotes();
addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
addQuote('Do or do not. There is no try.', 'Yoda')
addQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci')
getAllQuotes()
renderQuotes()


