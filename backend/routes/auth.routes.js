const express = require ('express')
const router = express.Router()
//sisntanxis de destructuracion
const { registrar, login } = require('./../controllers/auth.controller')

router.post('/registrar', registrar)

module.exports = router