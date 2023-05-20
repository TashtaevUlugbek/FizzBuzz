const input = document.querySelector("input")
const form = document.querySelector("form")
const btn = document.querySelector("button")
const box = document.querySelector(".box")
const icon = document.querySelector("i")
const label = document.querySelector("label")
const h1 = document.querySelector("h1")
icon.addEventListener("click", ()=>{
    form.classList.toggle("none")
    box.classList.toggle("opacity")
})
form.addEventListener("submit", (e)=>{
    let value = input.value
    if(value === ""){
        label.innerHTML = "Enter a number"
    }
    else if(value % 3 === 0 && value % 5 === 0){
        label.innerHTML=("FizzBuzz")
    }
    else if(value % 3 == 0){
        label.innerHTML = ("Fizz")
    }
    else if(value % 5 == 0){
        label.innerHTML = ("Buzz")
    }
    else{
        label.innerHTML = (value)
    }
    setInterval(()=>{
        label.innerHTML = ""
        input.value = ""
    }, 5000 )
    
})

document.addEventListener("keydown", (e)=>{
    if(e.key == "*"){
        h1.innerHTML = ("YOU ARE STUPID ASSHOLE")
    }
    
    else if (e.key == "/"){
        h1.innerHTML = (" ")
    }
})

setTimeout(()=>{console.log("Hello")}, 5000)


const img = document.createElement("img")

const body = document.querySelector("body")
img.setAttribute("src", "images/hellea.jpg")

body.insertAdjacentElement("beforeend", img)

img.style.zIndex = -1;

img.style.cssText  =" position: absolute; z-index : -1; top:00px ; left :0px; "



console.log(img);