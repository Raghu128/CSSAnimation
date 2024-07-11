const box = document.querySelector(".box");
let newX = 0, newY = 0, startX = 0, startY = 0;

box.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    startY = e.clientY;
    
    document.addEventListener("mousemove",mouseMove);
    document.addEventListener("mouseup", mouseUp)
})

function mouseUp(e) {
    document.removeEventListener("mousemove", mouseMove);
}

function mouseMove(e){
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX; startY = e.clientY;

    box.style.top = (box.offsetTop - newY) + "px";
    box.style.left = (box.offsetLeft - newX) + "px";
}

