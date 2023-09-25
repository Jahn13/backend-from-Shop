const express = require('express');
const multer = require('multer');
const accessKeyId = process.env.ACCESSKEYID;
const secretAccessKey = process.env.SECRETACCESSKEY;
const bucketName = process.env.BUCKETNAME;
const multerS3 = require('multer-s3');
const { getAllProduct, getOneProduct, postProduct, putProduct, deleteProductCtrl, post100Product } = require('../controllers/product.controller');
const { errorAsyncHandler } = require('../middlewares/errorHandler.middleware');
const {authMiddleware} = require('../middlewares/auth.middleware');
const Validator = require('../middlewares/validatorHandler.middleware');
const { S3Client } = require('@aws-sdk/client-s3');

const s3Client = new S3Client({ 
    region: 'us-east-2', 
    credentials: {accessKeyId: accessKeyId, 
                    secretAccessKey: secretAccessKey
                },
})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
const route = express.Router();

const upload = multer({
    storage: multerS3({
      s3: s3Client,
      bucket: `${bucketName}`,
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })

route.get('/', authMiddleware(['admin']), errorAsyncHandler(getAllProduct));
route.get('/:id', authMiddleware(['admin']), errorAsyncHandler(getOneProduct));
route.post('/create', [upload.single('image'), authMiddleware(['admin']), Validator('createProductSchema')], errorAsyncHandler(postProduct));
route.put('/edit/:id', authMiddleware(['admin']), Validator('createProductSchema'), errorAsyncHandler(putProduct));
route.delete('/delete/:id', authMiddleware(['admin']), errorAsyncHandler(deleteProductCtrl));
// route.post('/100', post100Product)

module.exports = route;