const express = require('express')
const app = express()
const dotenv = require('dotenv')
const routerPrueba = require('./routes/prueba.routes')
const authRouter = require('./routes/auth.routes')
//configuracion de dotenv
dotenv.config()
const dbConnection = require('./config/db')

//Variable  de entorno del puerto
const PUERTO = process.env.PUERTO

//Funcion que conecta a la base de datos
dbConnection()

//configuracion  de express obligatoria para poder usar las peticiones correctamente
app.use(express.json())
app.use('/api', routerPrueba)
app.use('/api', authRouter)

// app.get('/api/pruebas', (peticion, respuesta) => {
//     respuesta.json({
//         msg: 'prueba de traer informacion ejecutada'
//     })
// })

app.listen(PUERTO, () =>{
    try {
        console.log('Conectado al puerto', PUERTO)
    } catch(error) {
        console.error('Error conectandose al servidor', error.message)
    }
})