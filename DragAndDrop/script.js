const boxes = document.querySelectorAll(".box");
let newX = 0,
  newY = 0,
  startX = 0,
  startY = 0;
let currentBox = null;
let initialTop = 0,
  initialLeft = 0;

boxes.forEach((box) => {
  box.addEventListener("mousedown", (e) => {
    e.preventDefault();
    currentBox = box;

    startX = e.clientX;
    startY = e.clientY;

    initialTop = box.offsetTop;
    initialLeft = box.offsetLeft;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  });
});

function mouseUp(e) {
    let isOverLaped = false;
    const info = currentBox.getBoundingClientRect();
    boxes.forEach((box) => {
        const otherInfo = box.getBoundingClientRect();
        if( (info.right > otherInfo.left && info.right < otherInfo.right && ((info.bottom > otherInfo.top && info.bottom < otherInfo.bottom) || (info.top > otherInfo.top && info.top < otherInfo.bottom))  ) || 
            (info.left > otherInfo.left && info.left < otherInfo.right && ((info.bottom > otherInfo.top && info.bottom < otherInfo.bottom) || (info.top > otherInfo.top && info.top < otherInfo.bottom)) ) ) {
                isOverLaped = true
            }
    });
    if (isOverLaped) {
        currentBox.style.top = initialTop + "px";
        currentBox.style.left = initialLeft + "px";
    }
  document.removeEventListener("mousemove", mouseMove);
  document.removeEventListener("mouseup", mouseUp);
  currentBox = null;
}

function mouseMove(e) {
  if (currentBox === null) return;

  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  currentBox.style.top = currentBox.offsetTop - newY + "px";
  currentBox.style.left = currentBox.offsetLeft - newX + "px";
}
