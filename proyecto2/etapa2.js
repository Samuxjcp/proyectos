const email = document.querySelector("#name")
const password = document.querySelector("#password")
const formulario = document.querySelector(".form")
const aviso = document.querySelector(".aviso")

formulario.addEventListener("submit", e => {
    e.preventDefault()
    if (!email.value.includes ("@gmail.com")){
        mostrarAviso("Correo Incorrecto")
    }
})

function mostrarAviso(texto) {
    aviso.style.opacity = 1
    aviso.innerText=texto
    setTimeout(() => {
        aviso.style.opacity = 0
    }, 2000)
}
