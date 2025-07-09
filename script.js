const textElement = document.getElementById("text");
const text = "COMPUTER SOCIETY OF INDIA";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150); 
    }
}

window.onload = () => {
    textElement.innerHTML = ""; 
    typeEffect();
};
