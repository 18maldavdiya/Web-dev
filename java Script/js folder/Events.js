// let  btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick =  function(){
//     alert("button was clicked");
//     console.log("button was clicked");
// }

let btn = document.querySelectorAll("button");
for(btns of btn){
    btns.onclick = sayHello;
    btns.onmouseover = function(){
        console.log("mouse is over our button");
    }
}

function sayHello(){
    console.log("hello");
}
