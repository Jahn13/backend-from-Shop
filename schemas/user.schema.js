const Joi = require('joi');

const id = Joi
    .number()
const email = Joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .messages({
        'string.email': 'El campo debe de contener .com'
    })
const password = Joi
    .string()
    .min(4)
    .max(15)
    .messages({  'string.base': 'El campo debe ser un String',
                'string.min': 'El campo no debe ser menor a 4',
                'string.required': 'El campo Password no puede estar vacío'
            });

const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required()
})

const userUpdateSchema = Joi.object({
    email: email.required(),
    password: password.required()
})

module.exports = { createUserSchema, userUpdateSchema };