import express from 'express';
import {createUser} from '../controllers/userController'
var router = express.Router();

router.get('/', (req, res) => {
    res.render('login/login.ejs')
});

router.post('/', (req, res) => {

});

export default router; 