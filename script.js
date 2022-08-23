function settings() {
    const options = document.querySelector(".options-pop");
    const el = document.querySelector("#open");
    options.classList.remove("close");
    options.classList.add("visible");
    console.log("asdf")
}

function closeSettings() {
    const options = document.querySelector(".options-pop");
    const el = document.querySelector("#close");
    options.classList.remove("visible")
    console.log("asdf")
}