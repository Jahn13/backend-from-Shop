const Joi = require('joi');

const id = Joi
    .number()
const name = Joi
    .string()
    .min(4)
    .messages({
        'string.min': 'El campo no debe ser menor a 4'
    });

const createCategorySchema = Joi.object({
    name: name.required()
})

const getIdSchema = Joi.object({
    id: id.required()
})

module.exports = { createCategorySchema, getIdSchema }