const { createLoginSchema } = require('../schemas/login.schema')
const { Authentication } = require('../services/login.service')
const { apiResponseError, apiResponseSuccess } = require('../utils/responsers.utils')
const jwt = require('jsonwebtoken')

const postLogin = async (req, res) => {
    const validate = await createLoginSchema.validateAsync(req.body);
    const User = await Authentication(validate)
    
    if(User){
        res.status(200).json(apiResponseSuccess({User}, "Usuario encontrado", 200));
    }else{
        res.status(401).json(apiResponseError(null, "Usuario o contraseña inválido", 401));
    }
}

const postLogout = async (req, res) => {
    res.status(200).json(apiResponseSuccess({}, "Cierre de sesión", 200))
}

module.exports = { postLogin, postLogout }