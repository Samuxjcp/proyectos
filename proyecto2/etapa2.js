// Obtiene los elementos del DOM por su ID y los asigna a variables.
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const aviso = document.getElementById("aviso");
const avisoCorrecto = document.getElementById("avisoCorrecto");

// Añade un evento "submit" al formulario que se dispara cuando el formulario es enviado.
form.addEventListener("submit", e => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página).

    /*form.addEventListener("submit", function (evento)*/ 
    
    // Variables para almacenar mensajes de advertencia y una bandera para saber si hay errores.
    let warnings = "";
    let entrar = false;
    // Expresión regular para validar el formato del correo electrónico.
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Limpia cualquier mensaje anterior.
    aviso.innerHTML = "";
    avisoCorrecto.innerHTML = "";

    // Valida el correo electrónico usando la expresión regular.
    if (!regexEmail.test(email.value)) {
        warnings += `El correo electrónico no es válido.`;
        entrar = true; // Indica que hay un error.
    }

    // Valida que la contraseña tenga al menos 8 caracteres.
    if (password.value.length < 8) {
        warnings += `La contraseña debe tener al menos 8 caracteres.`;
        entrar = true; // Indica que hay un error.
    }

    // Si hay errores, muestra los mensajes de advertencia.
    if (entrar) {
        aviso.innerHTML = warnings;
    } else {
        // Si no hay errores, muestra un mensaje de éxito.
        avisoCorrecto.innerHTML = "Formulario enviado correctamente.";
        // Borra el mensaje de éxito después de 2 segundos.
        setTimeout(() => {
            avisoCorrecto.innerHTML = "";
        }, 2000);
    }
});
