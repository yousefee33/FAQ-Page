//variables
const accordion = document.getElementsByClassName("content-container");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle/*toggle between add and remove class for a element in js*/("active");
    });
}