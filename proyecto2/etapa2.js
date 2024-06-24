// Obtiene los elementos del DOM por su ID y los asigna a variables.
const email = document.getElementById("email");
const password = document.getElementById("password");
const usuario = document.getElementById("user")
const form = document.getElementById("form");
const aviso = document.getElementById("aviso");
const avisoCorrecto = document.getElementById("avisoCorrecto");

// Añade un evento "submit" al formulario que se dispara cuando el formulario es enviado.
form.addEventListener("submit", e => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página).

    // Expresión regular para validar el formato del correo electrónico.
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Limpia cualquier mensaje anterior.
    aviso.innerHTML = "";
    avisoCorrecto.innerHTML = "";


    if (usuario.value.length <1 || usuario.value.charAt(0).toUpperCase() != usuario.value.charAt(0)){
        return mostrarError("usuario no valida el primer caracter tiene que esta en mayuscula")
    }
    // Valida el correo electrónico usando la expresión regular.
    if (!regexEmail.test(email.value))
        return mostrarError(`El correo electrónico no es válido.`)


    // Valida que la contraseña tenga al menos 8 caracteres.
    if (password.value.length < 8) {
       return mostrarError("La constraseña no es valida debe tener al menos 8 digitos")
    }

    mostrarConfirmacion("Forumulario enviado correctamente")
});


function mostrarError(mensaje) {
    aviso.innerHTML = mensaje
}

function mostrarConfirmacion (mensaje){
    avisoCorrecto.innerHTML=mensaje 

    setTimeout(() => {
        avisoCorrecto.innerHTML = "";
    }, 2000);
}