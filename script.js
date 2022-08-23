function settings() {
    const options = document.querySelector("#options-pop");
    const el = document.querySelector("#symbol one");
    el = options.classList.add("visible");
}

function closeSettings() {
    const options = document.querySelector("#options-pop");
    const el = document.querySelector("#symbol two");
    el = options.classList.remove("visible")
}