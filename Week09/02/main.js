let input = document.getElementById("keyInput")
let div = document.getElementById("keyLog")
input.addEventListener("keypress",(e)=>{
    let p = document.createElement('p')
    if(e.key !== 'Enter') {
        p.innerHTML = `You pressed: ${e.key}`
        console.log(p.innerHTML);
        
    } else {
        p.innerHTML = `You pressed: Enter`
        p.style.color = "blue"
        console.log(p.innerHTML);
    }
    div.appendChild(p)
})