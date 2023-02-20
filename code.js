const container = document.getElementById("container");
const button = document.getElementById("reset");

for (i=0; i<256; i++){
    //adding boxes
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);

    //adding box css into js
    let f = 6.25;
    let x = f+"%";
    box.style.height = x;
    box.style.width = x;
    box.style.backgroundColor = "blue";

    //adding drawing 
    box.addEventListener("mouseover", changecolor);
    function changecolor(){
        box.style.backgroundColor = "black";
    }

    //adding reset
    button.addEventListener("click", reset);
    function reset(){
        box.style.backgroundColor = "white";
    }
}
