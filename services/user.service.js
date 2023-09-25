const { User } = require('../models');
const saltRounds = parseInt(process.env.BCRYPT_SALTROUNDS);
const bcrypt = require("bcrypt");

const allUsers = async() => {
    const users = await User.findAll();
    return users;
}

const oneUser = async (id) => {
    const user = await User.findByPk(id);
    return user;
}

const getPasswordWithHash = (password) => {
    return bcrypt.hashSync(password, saltRounds, function (err, hash){
        return hash;
    })
}

const createUser = async (data) => {
    data.password = getPasswordWithHash(data.password);
    const user = await User.create(data);

    return user;
}

const editUser = async (body, id) => {
    body.password = getPasswordWithHash(body.password);
    const user = await User.update(
        body,
        {
            where: {
              id: id
            }
        }
    );
    return user;
}

const deleteUserService = async (id) => {
    const user = await User.destroy({
        where: {
          id: id
        }
    });
    return user;
}

module.exports = { allUsers, oneUser, createUser, editUser, deleteUserService, getPasswordWithHash }