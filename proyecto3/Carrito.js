class Carrito {
    constructor() {
        this.productos = []
    }

    agregarProducto(producto) {
        const p = new Producto({ ...producto })
        p.setId(producto.id)
        this.productos.push(p)
        console.log(this.productos)
    }

    eliminarProducto(id) {
        this.productos = this.productos.filter((producto) => producto.id !== id)
    }

    calcularTotalCompra() {

    }



    productoYaEstaCarrito(id) {
        return Boolean(this.productos.find((producto) => producto.id === id))
    }
}