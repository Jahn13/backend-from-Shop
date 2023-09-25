const bcrypt = require('bcrypt')
const { User, Role, UserRole } = require('../models');
const jwt = require('jsonwebtoken');

const Authentication = async ({email, password}) => {
    const user = await User.findOne({
        where: {
            email: email
        },
        include: [{model: UserRole, raw: true, include: [Role]}],})
    if(user){
        const result = bcrypt.compareSync(password, user.password)
            if(result){
                const { password, ...UserWithoutPassword } = user.get();
                const {email, UserRoles} = UserWithoutPassword;
                const userFormat = {email, roles: []}
                
                UserRoles.map(userRole => userFormat.roles.push(userRole.Role.name))

                const token = jwt.sign(userFormat, '3f845dab')

                return token;
            }else{
                return false;
            }
    }else{
        return false;
    }
}

module.exports = { Authentication }