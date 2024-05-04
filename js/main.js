function comprar(nombre, precio) {
    let cantidad = prompt("Ingrese la cantidad de " + nombre + " que desea comprar:");

    if (cantidad === null) {
        return; 
    }

    if (!isNaN(cantidad) && parseInt(cantidad) > 0) {
        cantidad = parseInt(cantidad);
        let total = precio * cantidad;
        alert("Detalle de la Compra:\n\nProducto: " + nombre + "\nPrecio: $" + precio + "\nCantidad: " + cantidad + "\nTotal: $" + total);
        console.log("Detalle de la Compra:\n\nProducto: " + nombre + "\nPrecio: $" + precio + "\nCantidad: " + cantidad + "\nTotal: $" + total);
    } else {
        alert("La cantidad ingresada no es válida.");
    }
}
