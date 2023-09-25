const { createBrandSchema } = require('../schemas/brand.schema')
const { allBrand, oneBrand, createBrand, editBrand, deleteBrand } = require('../services/brand.service')
const { apiResponseSuccess } = require('../utils/responsers.utils')

const getAllBrand = async (req, res) => {
    res.status(200)
    .json(apiResponseSuccess(await allBrand(), 'Datos traidos exitosamente', 200))
}

const getOneBrand = async (req, res) => {
    res.status(200)
    .json(apiResponseSuccess(await oneBrand(req.params.id), 'Dato traido exitosamente', 200))
}

const postBrand = async (req, res) => {
    const brand = await createBrandSchema.validateAsync(req.body)
    res.status(201)
    .json(apiResponseSuccess(await createBrand(brand), 'Dato creado exitosamente', 201))
}

const putBrand = async (req, res) => {
    const brand = await createBrandSchema.validateAsync(req.body)
    res.status(200)
    .json(apiResponseSuccess(await editBrand(brand, req.params.id), 'Dato actualizado exitosamente', 200))
}

const deleteBrandCtrl = async (req, res) => {
    res.status(200)
    .json(apiResponseSuccess(await deleteBrand(req.params.id), 'Dato eliminado exitosamente', 200))
}

module.exports = { getAllBrand, getOneBrand, postBrand, putBrand, deleteBrandCtrl }