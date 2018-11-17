const button = document.querySelector("button");
let number = 1;
let counter = 1;

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

button.addEventListener("click", addElement);
