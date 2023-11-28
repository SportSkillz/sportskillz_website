var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/homepage.ejs')
})

module.exports = router; 