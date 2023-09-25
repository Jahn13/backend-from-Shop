const { createCategorySchema } = require('../schemas/category.schema');
const { allCategory, oneCategory, createCategory, editCategory, deleteCategory } = require('../services/category.service');
const { apiResponseSuccess } = require('../utils/responsers.utils');

const getAllCategory = async (req, res) => {
    res.status(200)
    .json(apiResponseSuccess(await allCategory(), 'Datos traidos exitosamente', 200));
};

const getOneCategory = async (req, res) => {
    res.status(200)
    .json(apiResponseSuccess(await oneCategory(req.params.id), 'Dato traido exitosamente', 200));
};

const postCategory = async (req, res) => {
    const category = await createCategorySchema.validateAsync(req.body)
    res.status(201)
    .json(apiResponseSuccess(await createCategory(category), 'Dato creado exitosamente', 201));
};

const putCategory = async (req, res) => {
    const category = await createCategorySchema.validateAsync(req.body)
    res.status(200)
    .json(apiResponseSuccess(await editCategory(category, req.params.id), 'Dato editado correctamente', 200));
};

const deleteCategoryCtrl = async (req, res) => {
    res.status(200)
    .json(apiResponseSuccess(await deleteCategory(req.params.id), 'Dato eliminado exitosamente', 200));
};

module.exports = { getAllCategory, getOneCategory, postCategory, putCategory, deleteCategoryCtrl }