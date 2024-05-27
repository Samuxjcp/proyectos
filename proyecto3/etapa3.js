
const productosTecnologicos = [
    {
        id: 1,
        type: "Teclado",
        name: "Teclado Mecánico",
        price: 89,
        image: "https://freepngimg.com/thumb/keyboard/20828-2-poseidon-gaming-keyboard-mechanical.png"
    },
    {
        id: 2,
        type: "Teclado",
        name: "Teclado Inalámbrico",
        price: 59,
        image: "https://i.blogs.es/0f7a76/teclados-03/1366_2000.jpeg"
    },
    {
        id: 3,
        type: "Teclado",
        name: "Teclado Ergonómico",
        price: 79,
        image: "https://tecnomall.ec/wp-content/uploads/2021/06/tecl.jpg"
    },
    {
        id: 4,
        type: "Mando",
        name: "Mando para PC",
        price: 39,
        image: "http://www.tierragamer.com/wp-content/uploads/2017/04/ps4-elite.jpg"
    },
    {
        id: 5,
        type: "Mando",
        name: "Mando para Xbox",
        price: 49,
        image: "https://media.vandal.net/i/1706x960/9-2020/20209211821637_1.jpg"
    },
    {
        id: 6,
        type: "Mando",
        name: "Mando para PlayStation",
        price: 59,
        image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_84051785/fee_786_587_png"
    },
    {
        id: 7,
        type: "Consola",
        name: "Consola Xbox Series X",
        price: 499,
        image: "https://gameroom.lt/31879-large_default/xbox-series-s-500gb-white-console.jpg"
    },
    {
        id: 8,
        type: "Consola",
        name: "Consola PlayStation 5",
        price: 499,
        image: "https://www.elsiglodedurango.com.mx/m/i/2020/06/886875.jpeg"
    },
    {
        id: 9,
        type: "Consola",
        name: "Consola Nintendo Switch",
        price: 299,
        image: "https://www.neoteo.com/wp-content/uploads/2016/10/NintendoSwitch_hardware_Console_03.0.jpg"
    },
    {
        id: 10,
        type: "Periferico",
        name: "Ratón Gamer",
        price: 29,
        image: "https://pcgame.ma/wp-content/uploads/2021/02/Logitech-G502-Lightspeed-Wireless-Gaming-Mouse-2.jpg"
    },
    {
        id: 11,
        type: "Periferico",
        name: "Auriculares Inalámbricos",
        price: 99,
        image: "https://f.fcdn.app/imgs/9410a3/amvstore.com.uy/amvsuy/af42/original/catalogo/1091_1091_1/2000-2000/auriculares-gamer-inalambricos-logitech-g-series-g435-negro-y-amarillo-auriculares-gamer-inalambricos-logitech-g-series-g435-negro-y-amarillo.jpg"
    },
    {
        id: 12,
        type: "Periferico",
        name: "Monitor 4K",
        price: 399,
        image: "https://i.ebayimg.com/00/s/MTU0N1gxNjAw/z/DJsAAOSw76pdnxia/$_57.JPG?set_id=8800005007"
    }
];


/*<article class="product">
    <img src="https://pcgame.ma/wp-content/uploads/2021/02/Logitech-G502-Lightspeed-Wireless-Gaming-Mouse-2.jpg"
        alt="Ratón Gamer" />
    <h3 class="product-name">Ratón Gamer</h3>
    <p class="product-price">precio: $29</p>
    <div class="add-to-cart">
        <button>Añadir al carrito</button>
    </div>
</article>*/

document.addEventListener("DOMContentLoaded", e => {
    const carrito = new Carrito()
    const sections= {
        teclado:document.getElementById("section_teclados"),
        mando:document.getElementById("section_mandos"),
        consola:document.getElementById("section_consolas"),
        periferico:document.getElementById("section_perifericos")
    }

    productosTecnologicos.forEach(
        producto => {

            const article = document.createElement("article")
            const img = document.createElement("img")
            const h3 = document.createElement("h3")
            const p = document.createElement("p")
            const div = document.createElement("div")
            const button = document.createElement("button")

            article.classList.add("product")

            img.setAttribute("src", producto.image)
            img.setAttribute("alt", producto.name)

            h3.classList.add("product-name")
            h3.innerText = producto.name

            p.classList.add("product-price")
            p.innerText = `Precio: $${producto.price}`

            div.classList.add("add-to-cart")

            button.innerText = "Añadir al carrito"

            button.onclick = () => carrito.agregarProducto(producto)

            article.appendChild(img)
            article.appendChild(h3)
            article.appendChild(p)
            article.appendChild(div)
            div.appendChild(button)

            console.log(article)

            sections[producto.type.toLowerCase()].appendChild(article)


        }
    )
})
