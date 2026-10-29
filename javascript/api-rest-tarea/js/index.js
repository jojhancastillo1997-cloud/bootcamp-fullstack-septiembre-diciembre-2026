const contenedor = document.getElementById('contenedor')

// 1. Función para obtener y pintar todos los productos (Get all products)
const obtenerProductos = async () => {
    try {
        // Endpoint para todos los productos
        const respuesta = await fetch('https://fakestoreapi.com/products')

        // Validamos si la respuesta de la red fue exitosa
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`)
        }

        const productos = await respuesta.json() // Arreglo de objetos

        // Limpiamos el contenedor antes de renderizar
        contenedor.innerHTML = ''

        // Recorremos el arreglo de productos
        productos.forEach(producto => {
            contenedor.innerHTML += `
                <div class="col-md-4 col-lg-3 text-center mb-4">
                    <div class="card h-100 shadow-sm p-3">
                        <img 
                            src="${producto.image}" 
                            alt="${producto.title}"
                            class="card-img-top object-fit-contain" 
                            style="height: 200px;"
                        >
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h5 class="card-title fs-6 text-truncate">${producto.title}</h5>
                                <p class="card-text text-muted fw-bold">
                                    $ ${producto.price.toLocaleString('es-CO')} COP
                                </p>
                            </div>
                            <!-- Botón dinámico que envía el id único del producto a la función verDetalle -->
                            <button class="btn btn-outline-primary btn-sm mt-2" onclick="verDetalle(${producto.id})">
                                Ver Detalle
                            </button>
                        </div>
                    </div>
                </div>
            `
        })

    } catch (error) {
        contenedor.innerHTML = `
            <div class="col-12 text-center">
                <span class="text-danger">
                    Ocurrió un error al cargar los productos: ${error.message}
                </span>
            </div>
        `
        console.error(error)
    }
}

// 2. Función para obtener el detalle de un solo producto (Get a single product)
const verDetalle = async (id) => {
    try {
        // Endpoint dinámico usando el ID del producto que recibió el clic
        const respuesta = await fetch(`https://fakestoreapi.com/products/${id}`)

        if (!respuesta.ok) {
            throw new Error(`No se pudo obtener la información del producto con ID ${id}`)
        }

        const productoUnico = await respuesta.json()

        // Mostramos la información del producto en consola o en una alerta (puedes adaptarlo después a un modal)
        console.log("Detalle del producto:", productoUnico)
        
        alert(`Has seleccionado:\n\nTítulo: ${productoUnico.title}\nPrecio: $${productoUnico.price}\nDescripción: ${productoUnico.description}`)

    } catch (error) {
        console.error("Error al consultar el detalle:", error)
        alert("Ocurrió un error al intentar ver los detalles del producto.")
    }
}

// Ejecutamos la función principal al cargar la página
obtenerProductos()