import express from 'express';
var router = express.Router();

router.get('/', (req, res) => {
    res.render('login/signin.ejs')
})

export default router; 