const bodyEl = document.querySelector("body");


bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.top = yPos + "px";
    spanEl.style.left = xPos + "px";
    const size = Math.floor(Math.random()*100);
    spanEl.style.height = size + "px";
    spanEl.style.width = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000)
});