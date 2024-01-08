const humbgger = document.querySelector(".toggler-btn");
const menu = document.querySelector("ul");

humbgger.addEventListener("click", () => {
    humbgger.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll("ul").forEach(n => n.
    addEventListener('click' , () => {
        humbgger.classList.remove("active");
        menu.classList.remove("active");
    })
)