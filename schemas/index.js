const { createLoginSchema } = require('./login.schema');
const { createUserSchema, userUpdateSchema } = require('./user.schema');
const { createBrandSchema } = require('./brand.schema');
const { createCategorySchema } = require('./category.schema');
const { createProductSchema } = require('./product.schema')

module.exports = {
    createLoginSchema,
    createUserSchema,
    userUpdateSchema,
    createBrandSchema,
    createCategorySchema,
    createProductSchema
}