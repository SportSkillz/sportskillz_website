import express from "express";
import { createSport } from "../controllers/sportController";

var router = express.Router();

router.get('/', (req, res) => {
    res.render('sportForm');
});

router.post('/', createSport);

export default router;
