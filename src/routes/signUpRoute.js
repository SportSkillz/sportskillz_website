import express from 'express';
var router = express.Router();

router.get('/', (req, res) => {
    res.render('login/signup.ejs')
})

export default router; 