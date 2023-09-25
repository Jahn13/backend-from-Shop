const Joi = require('joi');

const id = Joi
    .number();
const name = Joi
    .string()
    .min(4)
    .messages({
        'string.min': 'Este campo debe de contener 4 carácteres mínimo'
    })
const price = Joi 
    .number()
    .precision(2)
    .message({
        'number.base': 'Este campo debe de ser de tipo numérico',
        'number.precision': 'El número de decimales es 2 máximo'
    });
const brandId = Joi
    .number()
    .messages({
        'number.base': 'Este campo solo permite id de tipo numérico',
        'number.required': 'Este campo es requerido'
    })
const userId = Joi
    .number()
    .messages({
        'number.base': 'Este campo solo permite id de tipo numérico',
        'number.required': 'Este campo es requerido'
})
const categoryId = Joi
    .number()
    .messages({
        'number.base': 'Este campo solo permite id de tipo numérico',
        'number.required': 'Este campo es requerido'
})

const image = Joi
    .string()
    
const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    brandId: brandId.required(),
    userId: userId.required(),
    categoryId: categoryId.required(),
    image: image.required()
})


module.exports = { createProductSchema }