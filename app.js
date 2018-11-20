const button = document.querySelector("button");
let number = 1;
let counter = 1;

let size = 100.0;                  
button.style.width = size +"px";
button.style.height = size*0.6+"px";

let fib = []
fib[0] = 1
fib[1] = 1 
for (i = 2; i < 20; i++)
{
    fib[i] = fib[i-1] + fib[i-2];
}

const addElement = function () {
   
   
        const div = document.createElement("div");
        div.textContent = number;

        if (number  == fib[counter])
        {
            div.classList.add("circle");
            counter++;
        }

      
        document.body.appendChild(div);
        number++; 
}


const growUp = function () {
    if(size < window.innerWidth * 0.5 )
    {
        size++;
        button.style.width = size +"px";
        button.style.height = size*0.6+"px";
    }
    else {
        button.textContent = "I'm the biggest now ;)";
    }

}

button.addEventListener("click", addElement);
window.addEventListener("scroll", growUp);
button.addEventListener("contextmenu", function(){
    if(button.style.backgroundColor == "white"){
        button.style.backgroundColor = "black";
        button.style.color = "white";
    }
    else {
        button.style.backgroundColor = "white";
        button.style.color = "black";
    }
})

