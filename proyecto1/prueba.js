const email = document.querySelector("#name")
const password = document.querySelector("#password")
const formulario = document.querySelector(".form")
const aviso = document.querySelector(".aviso")

formulario.addEventListener("submit", e => {
    e.preventDefault()
    if (!email.value.includes("@gmail.com")) {
        mostrarAviso("Correo Incorrecto")
    }
})

function mostrarAviso(texto) {
    aviso.style.opacity = 1
    aviso.innerText = texto
    setTimeout(() => {
        aviso.style.opacity = 0
    }, 2000)
}

/* aviso
position: absolute;
bottom: 0;
right: 0;
margin: 20px;
background - color: red;
color: white;
padding: 10px;
border - radius: 24px;
opacity: 0;
transition: all .5s;*/