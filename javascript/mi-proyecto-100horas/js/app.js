// ========================== PRODUCTOS ===========================
const productos = [
    {
        id: 1,
        nombre: 'Arduino',
        descripcion: 'Es una placa de desarrollo basada en el microcontrolador ATmega328P, ideal para iniciarse en la electrónica, la automatización y la programación.',
        precio: 58000,
        imagen: 'fotos/Arduino-Uno-R3-con-chip-CH340-USB-C-_E2_80_93-Compatible-1.jpg'
    },
    {
        id: 2,
        nombre: 'DriverL298',
        descripcion: 'Es un módulo electrónico basado en un doble puente H que permite controlar la dirección y la velocidad de motores de corriente continua (DC) y motores paso a paso.',
        precio: 12000,
        imagen: 'fotos/images (1).jpg'
    },
    {
        id: 3,
        nombre: 'Motorreductor',
        descripcion: 'Es un dispositivo que combina un motor eléctrico con una caja reductora de velocidad (tren de engranajes) en una sola unidad compacta.',
        precio: 8000,
        imagen: 'fotos/Motorreductor-con-caja-reductora-6V-1-48-1.jpg'
    },
    {
        id: 4,
        nombre: 'MotorreductorMetalico',
        descripcion: 'Es un dispositivo que combina un motor eléctrico con una caja reductora de velocidad (tren de engranajes) en una sola unidad compacta metalica.',
        precio: 16000,
        imagen: 'fotos/motorreductor-metalico-n20-3v-9v-130-390rpm-motor-dc-0.jpg'
    },
    {
        id: 5,
        nombre: 'Servomotor',
        descripcion: 'Es un actuador electromecánico de alta precisión que permite controlar con exactitud la posición angular, la velocidad y la aceleración de su eje.',
        precio: 13000,
        imagen: 'fotos/istockphoto-181934582-2048x2048.jpg'
    },
    {
        id: 6,
        nombre: 'Motor',
        descripcion: 'Es una máquina eléctrica que transforma la energía eléctrica en energía mecánica de movimiento rotatorio, mediante la interacción de campos magnéticos',
        precio: 5000,
        imagen: 'fotos/motor.jpg'
    },
    {
        id: 7,
        nombre: 'MotorDron',
        descripcion: 'Es el componente electromecánico que transforma la energía eléctrica de la batería en movimiento de rotación para hacer girar las hélices y generar el empuje necesario para volar.',
        precio: 9000,
        imagen: 'fotos/Kit de motores para mini Dron.jpg'
    },
    {
        id: 8,
        nombre: 'BombaAgua',
        descripcion: 'Es un dispositivo eléctrico compacto que funciona con corriente directa. Su función principal es mover agua de un punto a otro o generar presión, destacando por su bajo consumo de energía, portabilidad y seguridad en entornos húmedos.',
        precio: 18000,
        imagen: 'fotos/15cf271bee85ea730e5affce0e1e51a7ea73b97e-1642196132-74123145214.jpg.thumb_400x300.jpg'
    },
    {
        id: 9,
        nombre: 'SensorUltrasonico',
        descripcion: 'Es un dispositivo electrónico que mide la distancia hacia un objeto sin contacto físico, utilizando ondas sonoras de alta frecuencia (ultrasonido) que el oído humano no puede escuchar.',
        precio: 12000,
        imagen: 'fotos/02-1024x983.jpg'
    },
    {
        id: 10,
        nombre: 'SensorPir',
        descripcion: 'Es un dispositivo electrónico que detecta el movimiento al medir los cambios en la radiación infrarroja que emiten los objetos y personas en su campo de visión.',
        precio: 10000,
        imagen: 'fotos/IF-SENSOR-SR501.jpg'
    },
    {
        id: 11,
        nombre: 'SensorIr',
        descripcion: 'Es un dispositivo optoelectrónico que detecta o mide la radiación electromagnética infrarroja en su entorno, la cual es invisible para el ojo humano.',
        precio: 10000,
        imagen: 'fotos/SENSOR-INFRAROJO-TRS-500.jpg'
    },
    {
        id: 12,
        nombre: 'SensorGas',
        descripcion: 'Es un dispositivo semiconductor diseñado para detectar monóxido de carbono (CO) en el aire.',
        precio: 12000,
        imagen: 'fotos/istockphoto-1219263313-2048x2048.jpg'
    },
    {
        id: 13,
        nombre: 'Fotocelda',
        descripcion: 'Una fotocelda (también conocida como sensor crepuscular o interruptor fotoeléctrico) es un dispositivo electrónico que enciende y apaga las luces de forma automática según la cantidad de luz natural en el ambiente.',
        precio: 2000,
        imagen: 'fotos/fotoceldas.jpg'
    },
    {
        id: 14,
        nombre: 'Led',
        descripcion: 'Un LED (del inglés Light-Emitting Diode, o diodo emisor de luz) es un componente electrónico semiconductor que transforma la energía eléctrica directamente en luz mediante un proceso llamado electroluminiscencia.',
        precio: 200,
        imagen: 'fotos/images.jpg'
    },
    {
        id: 15,
        nombre: 'LCD',
        descripcion: 'Es un módulo de cristal líquido capaz de mostrar 16 caracteres por fila en 2 líneas (un total de 32 caracteres alfanuméricos).',
        precio: 14000,
        imagen: 'fotos/lcd 2x16.jpg'
    },
    {
        id: 16,
        nombre: 'Oled',
        descripcion: 'Es un tipo de panel en el que cada píxel genera su propia luz de manera individual.',
        precio: 16000,
        imagen: 'fotos/pantallaOled.jpg'
    },
    {
        id: 17,
        nombre: 'Integrado',
        descripcion: 'Es un chip analógico-digital de 8 pines muy popular en la electrónica para generar temporizaciones, pulsos y oscilaciones.',
        precio: 500,
        imagen: 'fotos/Signetics_NE555N.jpg'
    },
]

// ==================== CARRITO =========================
let carrito = []

// ========================= ELEMENTOS DEL HTML ==================

const botonesAgregar = document.querySelectorAll('.btn-agregar')

const listaCarrito = document.getElementById('listaCarrito')
const carritoVacio = document.getElementById('carritoVacio')

const contadorCarrito = document.getElementById('contadorCarrito')
const totalProductos = document.getElementById('totalProductos')
const btnVaciarCarrito = document.getElementById('btnVaciarCarrito')
const btnComprar = document.getElementById('btnComprar')
const totalCarrito = document.getElementById('totalCarrito')

// ================ EVENTOS DE LOS BOTONES DE AGREGAR AL CARRITO ================

botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {
        const id = Number(boton.dataset.id)
        
        agregarAlCarrito(id)
    })
})

const formatearPrecio = (valor) => {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: 'COP',
        maximumFractionDigits: 0
    }).format(valor)
}

// ======================== ACTUALIZAR CARRITO ================================
const actualizarCarrito = () => {
    listaCarrito.innerHTML = ''

    if(carrito.length === 0) {
        carritoVacio.style.display = 'block'
    } else {
        carritoVacio.style.display = 'none'
    }

    carrito.forEach(producto => {
        const item = document.createElement('div')

        item.classList.add(
            'carrito-item',
            'row',
            'align-items.center'
        )

        item.innerHTML = `
            <div class="col-md-2">
                <img 
                    src="${ producto.imagen }" 
                    alt="${ producto.nombre }"
                    class="img-fluid rounded"
                >
            </div>
            <div class="col-md-4">
                <h5> ${ producto.nombre } </h5>
                <p class="text-muted mb-0">
                    ${ producto.descripcion }
                </p>
                <strong>
                    ${ formatearPrecio(producto.precio * producto.cantidad) }
                </strong>
            </div>
            
            <div class="col-md-3">
                <div class="d-flex align-items-center gap-2">
                    <button 
                        class="btn btn-outline-secondary btn-sm btn-disminuir"
                        data-id="${ producto.id }"
                    >
                        -
                    </button>

                    <span class="cantidad">
                        ${ producto.cantidad }
                    </span>

                    <button 
                        class="btn btn-outline-secondary btn-sm btn-aumentar"
                        data-id="${ producto.id }"
                    >
                        +
                    </button>
                </div>
            </div>

            <div class="col-md-1 text-end">
                <button
                    class="btn btn-danger btn-sm btn-eliminar"
                    data-id="${ producto.id }"
                >
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        `

        listaCarrito.appendChild(item)
    })

    actualizarTotales()
    agregarEventorCarrito()
}

// =================== AGREGAR PRODUCTOS AL CARRITO ==================

const agregarAlCarrito = (id) => {
    const producto = productos.find(producto => producto.id === id)

    const productoCarrito = carrito.find(producto => producto.id === id)

    if(productoCarrito) {
        productoCarrito.cantidad++
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        })
    }

    actualizarCarrito()
}

// ======================= boton vaciar carrito de compras =======================

btnVaciarCarrito.addEventListener('click', () => {
    carrito = []

    actualizarCarrito()
})

// ======================== EVENTOS DEL CARRITO ============================
const agregarEventorCarrito = () => {
    const botonesAumentar = document.querySelectorAll('.btn-aumentar')

    botonesAumentar.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = Number(boton.dataset.id)
            aumentarCantidad(id)
        })
    })

    const botonesDisminuir = document.querySelectorAll('.btn-disminuir')

    botonesDisminuir.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = Number(boton.dataset.id)
            disminuirCantidad(id)
        })
    })

    const botonesEliminar = document.querySelectorAll('.btn-eliminar')

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = Number(boton.dataset.id)
            eliminarDelCarrito(id)
        })
    })
}

const aumentarCantidad = (id) => {
    const producto = carrito.find(producto => producto.id === id)

    if(producto) {
        producto.cantidad++
    }

    actualizarCarrito()
}


const disminuirCantidad = (id) => {
    const producto = carrito.find(producto => producto.id === id)

    if(producto) {
        producto.cantidad--
    }

    actualizarCarrito()
}

const eliminarDelCarrito = (id) => {
    carrito = carrito.filter(producto => producto.id !== id)

    actualizarCarrito()
}

const actualizarTotales = () => {

    //cantidad total de productos
    const cantidad = carrito.reduce(
        (total, producto) => {
            return total + producto.cantidad
        },
        0
    )

    //precio total

    const total = carrito.reduce(
        (total, producto) => {
            return total + producto.precio * producto.cantidad
        },
        0
    )

    totalProductos.textContent = cantidad
    contadorCarrito.textContent = cantidad
    totalCarrito.textContent = formatearPrecio(total)
} 