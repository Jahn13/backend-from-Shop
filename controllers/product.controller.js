const { json } = require("sequelize")
const { createProductSchema } = require("../schemas/product.schema")
const { oneProduct, allProduct, createProduct, editProduct, deleteProduct } = require("../services/product.service")
const { apiResponseSuccess } = require("../utils/responsers.utils")


const getAllProduct = async (req, res) => {
    url = req.get('host') + req.baseUrl
    res.status(200)
    .json(apiResponseSuccess(await allProduct(url, req.query.page), "Datos traidos exitosamente", 2000))
}

const getOneProduct = async (req, res) => {
    res.status(200)
    .json(apiResponseSuccess(await oneProduct(req.params.id), "Dato traido exitosamente", 200))
}

const postProduct = async (req, res) => {
    console.log(req.body);
    res.status(201)
    .json(apiResponseSuccess(await createProduct(req.body), "Dato creado exitosamente", 201));
}

// const post100Product = async (req, res) => {
//     res.status(201)
//     .json(apiResponseSuccess(await create100Product(), "Dato creado exitosamente", 201));
// }

const putProduct = async (req, res) => {
    const validate = await createProductSchema.validateAsync(req.body);
    res.status(200)
    .json(apiResponseSuccess(await editProduct(validate, req.params.id), "Dato actualizado exitosamente", 200))
}

const deleteProductCtrl = async (req, res) => {
    res.status(200)
    json(apiResponseSuccess(await deleteProduct(req.params.id), "Dato eliminado exitosamente", 200))
}

module.exports = { getAllProduct, getOneProduct, postProduct, putProduct, deleteProductCtrl }