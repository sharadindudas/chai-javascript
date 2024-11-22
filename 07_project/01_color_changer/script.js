const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const body = document.body;
        const bgColor = e.target.id;
        body.style.backgroundColor = bgColor;
    })
})