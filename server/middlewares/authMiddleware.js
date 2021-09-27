const ApiError = require('../exceptions/api-error')
const tokenService = require('../services/tokenService');

const authMiddleware = async (req,res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return next(ApiError.UnauthorizedError())
        }
        const token = authHeader.split(' ')[1];

        if(!token){
            return next(ApiError.UnauthorizedError())
        }

        const validatedTokenData = tokenService.validateToken(token);
        console.log(validatedTokenData)
        if(!validatedTokenData){
            return next(ApiError.UnauthorizedError())
        }
        req.user = validatedTokenData;
        return next()
    }catch(err){
        return next(ApiError.UnauthorizedError())
    }
}
module.exports = authMiddleware;