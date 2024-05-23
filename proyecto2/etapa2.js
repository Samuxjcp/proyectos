const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const aviso = document.getElementById("aviso");
const avisoCorrecto = document.getElementById("avisoCorrecto")

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    aviso.innerHTML = "";

    if (!regexEmail.test(email.value)) {
        warnings += `El correo electrónico no es válido.<br>`;
        entrar = true;
    }

    if (password.value.length < 8) {
        warnings += `La contraseña debe tener al menos 8 caracteres.<br>`;
        entrar = true;
    }

    if (entrar) {
        aviso.innerHTML = warnings;
    } else {
        avisoCorrecto.innerHTML = "Formulario enviado correctamente.";
    }
});
