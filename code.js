const container = document.getElementById("container");
const resetbutton = document.getElementById("reset");
const ratiobutton = document.getElementById("ratio");


let f = prompt("Type in ratio number under 100");
let x = 100/f;
let w = f*f;

for (i=0; i<w; i++){
    //adding boxes
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);

    //adding box css into js
    let n = x+"%";
    console.log(n);
    box.style.height = n;
    box.style.width = n;
    box.style.backgroundColor = "#FFFDE4";

    //adding drawing 
    box.addEventListener("mouseover", changecolor);
    function changecolor(){
        box.style.backgroundColor = "black";
    }

    //adding reset
    resetbutton.addEventListener("click", reset);
    function reset(){
        box.style.backgroundColor = "white";
    }
}

// adding ratio/new game button
ratiobutton.addEventListener("click", setratio);
function setratio(){
    let f = prompt("Type in ratio number under 100");
    let x = 100/f;
    let w = f*f;

    container.replaceChildren();

    for (i=0; i<w; i++){
        //adding boxes
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    
        //adding box css into js
        let n = x+"%";
        console.log(n);
        box.style.height = n;
        box.style.width = n;
        box.style.backgroundColor = "#FFFDE4";
    
        //adding drawing 
        box.addEventListener("mouseover", changecolor);
        function changecolor(){
            box.style.backgroundColor = "black";
        }
    
        //adding reset
        resetbutton.addEventListener("click", reset);
        function reset(){
            box.style.backgroundColor = "white";
        }
    }
}