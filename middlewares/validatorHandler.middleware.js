const schemas = require('../schemas')

module.exports = (validatorName) => {
    if(!schemas.hasOwnProperty(validatorName)){
        throw new Error(`'${validatorName}' validador no fue encontrado`)
    }
    return async (req, res,  next) => {
        try{
            if(req.file){
                console.log(req.file)
                req.body['image'] = req.file.location;
            }
            const validate = await schemas[validatorName].validateAsync(req.body)
            req.body = validate;
            next()
        }catch(error){
            next(error)
        }
    }
}