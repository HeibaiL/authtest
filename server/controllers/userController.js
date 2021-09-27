const userService = require('../services/userService');

class UserController {
    async registerUser(req, res, next) {
        try {
            const userData = await userService.registerUser(req.body);
            res.cookie('refreshToken', userData.refreshToken, {httpOnly: false, maxAge: 30*24*60*1000})
            return res.json(userData);
        } catch (err) {
            next(err)
        }

    }

    async loginUser(req, res, next) {
        try {
            const userData = await userService.loginUser(req.body);
            res.cookie('refreshToken', userData.refreshToken, {httpOnly: false, maxAge: 30*24*60*1000})
            return res.json(userData);
        }catch(err){
           next(err)
        }
    }

    async logoutUser(req, res, next){
        const {refreshToken} = req.cookies;
        const user = await userService.logoutUser(refreshToken);
        res.clearCookie("refreshToken");
        return res.send(user);
    }

}

module.exports = new UserController();