class Producto {
    constructor({ type, name, price, image }) {
        this.id = null
        this.quantity = 1
        this.type = type
        this.name = name
        this.price = price
        this.image = image
    }

    setId(id) {
        this.id = id
    }

    aumentarCantidad() {
        this.quantity++
    }

    disminuirCantidad() {
        this.quantity--
    }
}