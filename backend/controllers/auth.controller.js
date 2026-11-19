const User = require('./../models/User')

const registrar = async(peticion, respuesta) => {
    try{
        // const nombre = peticion.body.nombre
        // const email = peticion.body.email
        // const password = peticion.body.password

        const { nombre, email, password } = peticion.body

        let user = new User({
            nombre,
            email,
            password
        })

        await user.save()

        return respuesta.status(201).json({
            msg: 'El usuario fue crado exitosamente!!'
        })

    } catch(error) {
        
        return respuesta.status(500).json({
            msg: `Error al registrar usuario ${ error.messege }` //si el servidor llega a fallar nos va a debvolver un 500 y nos va a devolver un error generico con error.message
        })
    }
}

const login = async(peticion, respuesta) => {
    try{

    } catch{
        return respuesta.status(500).json({
            msg: `Error al iniciar sesion ${ error.messege }` //si el servidor llega a fallar nos va a debvolver un 500 y nos va a devolver un error generico con error.message
        })
    }
}

module.exports = {
    registrar,
    login
}