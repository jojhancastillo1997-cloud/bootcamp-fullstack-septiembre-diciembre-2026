// const usuario = {
//     nombre: 'Jojhan Castillo Vega',
//     edad: 29
// }
// console.log(usuario.nombre)

// usuario.nombre = 'Otro nombre'

const body = document.querySelector('body')


const usuarios = [
    {nombre: 'Jojhan Castillo Vega', edad: 29 }, 
    {nombre: 'Mario Paiba', edad: 20 }, 
    {nombre: 'Santiago Herrera', edad: 55 }, 
    {nombre: 'Victor Franco', edad: 28 }, 
    {nombre: 'Yenny Ruiz', edad: 27 }, 
] 

usuarios.forEach(usuario => {
    body.innerHTML += `<h1>${  usuario.nombre }</<h1>`
})