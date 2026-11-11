const controladorDePrueba = async (peticion, respuesta) => {
    try{
        respuesta.send('Respuesta enviada desde el controladorDePrueba')
    } catch(error) {

    }
}



module.exports = controladorDePrueba