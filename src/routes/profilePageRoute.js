import express from 'express';
var router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/profile.ejs')
})

export default router; 