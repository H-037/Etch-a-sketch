const container = document.getElementById("container");

for (i=0; i<256; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    box.addEventListener("mouseover", changecolor);
    function changecolor(){
        box.style.backgroundColor = "white";
    }
}