import express from "express";
import { createSport } from "../controllers/sportController.js";
import multer from "multer";

var router = express.Router();

const storage = multer.memoryStorage(); // Armazena a imagem na memória
const upload = multer({storage: storage});

router.get('/', (req, res) => {
    res.render('sportForm');
});

// Rota para processar o envio do formulário com upload de imagem
router.post('/', upload.single('image'), createSport);

export default router;
