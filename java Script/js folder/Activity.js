let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let div = document.querySelector("div");
    div.style.backgroundColor = getRandomColour();
    
})

function getRandomColour(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}