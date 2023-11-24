import express from 'express';
var router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/homepage.ejs')
})

export default router; 