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
        let suma = 0


        this.productos.forEach(({ price, quantity }) => {
            suma += price * quantity
        })
        return suma
    }



    productoYaEstaCarrito(id) {
        return Boolean(this.productos.find((producto) => producto.id === id))
    }
}