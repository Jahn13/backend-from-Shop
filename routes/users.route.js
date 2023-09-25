const express = require('express');
const router = express.Router();

const { getAllUser, getOneUser, postCreateUser, putEditUser, deleteUser } = require('../controllers/user.controller');
const { errorAsyncHandler } = require('../middlewares/errorHandler.middleware');
const {authMiddleware} = require('../middlewares/auth.middleware');
const Validator = require('../middlewares/validatorHandler.middleware');

/* GET users listing. */
router.get('/', authMiddleware(['admin']), errorAsyncHandler(getAllUser));
router.get('/:id', authMiddleware(['admin']), errorAsyncHandler(getOneUser));
router.post('/create', authMiddleware(['admin']), Validator('createUserSchema'), errorAsyncHandler(postCreateUser));
router.put('/edit/:id', authMiddleware(['admin']), Validator('userUpdateSchema'), errorAsyncHandler(putEditUser));
router.delete('/delete/:id', authMiddleware(['admin']), errorAsyncHandler(deleteUser));

module.exports = router;
