const { Product, Brand, Category, User } = require('../models');

const allProduct = async (host, page = 1) => {
    const limit = 10;
    const offset = (page - 1)*limit;
    const products = await Product.findAndCountAll({ 
        include: [Brand, Category, User], 
        offset: offset, limit: limit 
    } );

    const {rows, count} = products;
    const currentPage = (offset * 0.1)+1; 
    const totalPages = Math.ceil(count/limit);

    const paginate = {
        totalPages: totalPages,
        currentPage: currentPage,
        totalItems: limit,
        next: currentPage < totalPages ? `${host}?page=${currentPage + 1}` : null,
        last: currentPage > 1 ? `${host}?page=${currentPage - 1}` : null,
        data: rows
    }

    return paginate;
}

const oneProduct = async (id) => {
    const product = await Product.findByPk(id);

    return product;
}

const createProduct = async (data) => {
    const product = await Product.bulkCreate([data], { validate: true });

    return product;
}

// const create100Product = async () => {
//     for(i=13; i<=100;i++){
//         const product = await Product.bulkCreate([
//             {
//                 name: `product${i}`,
//                 price:  Math.random() * 100,
//                 brandId: 1,
//                 categoryId: 3,
//                 userId: 17,
//                 cratedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
//                 updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
//             }
//         ])
//     }
// }


const editProduct = async (body, id) => {
    const product = await Product.update(body, {
        where: {
            id: id
        }
    });

    return product;
}

const deleteProduct = async (id) => {
    const product = await Product.destroy({
        where: {
            id: id
        }
    });

    return product;
};

module.exports = { allProduct, oneProduct, createProduct, editProduct, deleteProduct };