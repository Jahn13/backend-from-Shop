const { userUpdateSchema, createUserSchema } = require('../schemas/user.schema')
const { allUsers, oneUser, createUser, editUser, deleteUserService } = require('../services/user.service')
const { apiResponseSuccess } = require('../utils/responsers.utils')

const getAllUser = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await allUsers(), "Datos traidos con éxito", 200))
}

const getOneUser = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await oneUser(req.params.id), "Dato traido con éxito", 200))
}

const postCreateUser = async (req, res) => {
    const user = await createUserSchema.validateAsync(req.body)
    res.status(201).json(apiResponseSuccess(await createUser(user), "Creado con éxito", 201))
}

const putEditUser = async (req, res) => {
    const user = await userUpdateSchema.validateAsync(req.body)
    res
    .status(200)
    .json(apiResponseSuccess(await editUser(user, req.params.id), `id no.${req.params} actualizado`, 200))
}

const deleteUser = (req, res) => {
    res
    .status(200)
    .json(apiResponseSuccess(deleteUserService(req.params.id), `id no.${req.params} eliminado`, 200))
}

module.exports = { getAllUser, getOneUser, postCreateUser, putEditUser, deleteUser }