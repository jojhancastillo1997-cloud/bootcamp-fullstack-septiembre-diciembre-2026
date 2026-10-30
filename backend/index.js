const express = require('express')
const app = express()

app.listen(3000, () =>{
    try {
        console.log('Conectado al puerto')
    } catch(error) {
        console.error('Error conectandose al servidor', error.message)
    }
})