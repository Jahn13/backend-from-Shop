const Joi = require('joi');

const email = Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });
const password = Joi.string()
    .min(4)
    .max(10)
    .messages({  'string.base': 'El campo debe ser un String',
                'string.min': 'El campo no debe ser menor a 4',
                'string.required': 'El campo Password no puede estar vacío'
            });

const createLoginSchema = Joi.object({
    email: email.required(),
    password: password.required()
});

const postLogin = Joi.object({
    email: email.required(),
});

module.exports = { createLoginSchema, postLogin }