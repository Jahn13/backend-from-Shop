const { Brand } = require('../models');

const allBrand = async () => {
    const brands = await Brand.findAll();

    return brands;
}

const oneBrand = async (id) => {
    const brand = await Brand.findByPk(id);

    return brand;
}

const createBrand = async (data) => {
    const brand = await Brand.bulkCreate([data], { validate: true });

    return brand;
}

const editBrand = async (body, id) => {
    const brand = await Brand.update(body, { 
        where: {
            id: id
        }
    });

    return brand;
}

const deleteBrand = async (id) => {
    const brand = await Brand.destroy({
        where: {
            id: id
        }
    });

    return brand;
}

module.exports = { allBrand, oneBrand, createBrand, editBrand, deleteBrand };