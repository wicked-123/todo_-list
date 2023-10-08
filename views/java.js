const checkbox = document.getElementById("myCheckbox");
const label = document.querySelector("label");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        label.classList.add("strike-through");
    } else {
        label.classList.remove("strike-through");
    }
});