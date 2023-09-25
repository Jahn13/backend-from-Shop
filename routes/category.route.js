const express = require('express');
const { getAllCategory, getOneCategory, postCategory, putCategory, deleteCategoryCtrl } = require('../controllers/category.controller');
const { errorAsyncHandler } = require('../middlewares/errorHandler.middleware');
const {authMiddleware} = require('../middlewares/auth.middleware')
const Validator = require('../middlewares/validatorHandler.middleware')

const route = express.Router();

route.get('/', authMiddleware(['admin', 'moderador']), errorAsyncHandler(getAllCategory));
route.get('/:id', authMiddleware(['admin', 'moderador']), errorAsyncHandler(getOneCategory));
route.post('/create', authMiddleware(['admin', 'moderador']), Validator('createCategorySchema'), errorAsyncHandler(postCategory));
route.put('/edit/:id', authMiddleware(['admin', 'moderador']), Validator('createCategorySchema'), errorAsyncHandler(putCategory));
route.delete('/delete/:id', authMiddleware(['admin', 'moderador']), errorAsyncHandler(deleteCategoryCtrl));

module.exports = route;