import express from 'express';
import { listSport } from '../controllers/sportController.js';
var router = express.Router();

router.get('/', async (req, res) => {
    try {
        const sportList = await listSport();

        res.render('pages/homepage.ejs', {sportList});
    } catch (error) {
        console.error('Erro ao renderizar a página home:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

router.get('/', listSport)

export default router; 