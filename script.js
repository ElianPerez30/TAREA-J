const texts = ["Desarrollador", "Diseñador", "Creativo"];
let textIndex = 0;
let charIndex = 0;
const speed = 100;
const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        console.log("Formulario enviado con éxito");
        console.log("Nombre:", name);
        console.log("Email:", email);
        console.log("Mensaje:", message);

        alert("¡Mensaje enviado correctamente!");

        // Limpiar los campos después del envío
        form.reset();
    });
});


window.onload = typeWriter;


