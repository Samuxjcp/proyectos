class Carrito {
    constructor() {
        this.productos = []
    }

    agregarProducto(producto) {
        const p = new Producto({ ...producto })
        p.setId(this.obtenerUltimoId() + 1)
        this.productos.push(p)
        console.log(this.productos)
    }

    eliminarProducto(id) {

    }

    aumentarCantidad(id) {

    }

    disminuirCantidad(id) {

    }

    calcularTotalCompra() {

    }

    obtenerUltimoId() {
        let ultimoId = 0
        this.productos.forEach(producto => {
            if (producto.id > ultimoId) {
                ultimoId = producto.id
            }
        })
        return ultimoId
    }
}