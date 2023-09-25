const express = require('express');
const { postLogin, postLogout } = require('../controllers/login.controller');
const { errorAsyncHandler } = require('../middlewares/errorHandler.middleware');
const Validator = require('../middlewares/validatorHandler.middleware')
const router = express.Router();

/* Login User*/
router.post('/auth', Validator('createLoginSchema'), errorAsyncHandler(postLogin));
router.post('/logout', postLogout);

module.exports = router;