const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController')
const dataService = require('../server/services/dataService')
const authMiddleware = require('../server/middlewares/authMiddleware')


router.get('/', (req, res) => {
    res.sendStatus(200);
})
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/logout', userController.logoutUser);

router.get('/data', authMiddleware, dataService.getData);


// router.post('/login', userController.login);


// router.get('/facebook_auth', authService);

module.exports = router;