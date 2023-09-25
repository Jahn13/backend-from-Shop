const { Category } = require('../models');

const allCategory = async () => {
    const categories = await Category.findAll()

    return categories;
}

const oneCategory = async (id) => {
    const category = await Category.findByPk(id);

    return category;
}

const createCategory = async (data) => {
    const category = await Category.bulkCreate([data], { validate: true });

    return category;
}

const editCategory = async (body, id) => {
    const category = await Category.update(body, {
        where: {
            id: id
        }
    });

    return category;
}

const deleteCategory = async (id) => {
    const category = await Category.destroy({
        where: {
            id: id
        }
    });

    return category;
}

module.exports = { allCategory, oneCategory, createCategory, editCategory, deleteCategory }