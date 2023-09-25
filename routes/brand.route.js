const express = require('express');
const { getAllBrand, getOneBrand, postBrand, putBrand, deleteBrandCtrl } = require('../controllers/brand.controller');
const { errorAsyncHandler } = require('../middlewares/errorHandler.middleware');
const {authMiddleware} = require('../middlewares/auth.middleware')
const Validator = require('../middlewares/validatorHandler.middleware');

const route = express.Router();

route.get('/', authMiddleware(['admin']), errorAsyncHandler(getAllBrand));
route.get('/:id', authMiddleware(['admin']), errorAsyncHandler(getOneBrand));
route.post('/create', authMiddleware(['admin']), Validator('createBrandSchema'), errorAsyncHandler(postBrand));
route.put('/edit/:id', authMiddleware(['admin']), Validator('createBrandSchema'), errorAsyncHandler(putBrand));
route.delete('/delete/:id', authMiddleware(['admin']), errorAsyncHandler(deleteBrandCtrl));

module.exports = route;