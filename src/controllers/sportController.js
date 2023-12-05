import { SportModel } from "../models/sportModel.js";
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from "url";

export const createSport = async(req, res) => {
    try {
        const {title, description} = req.body;

        if(!title || !description){
            return res.status(400).json({erro: 'Dados invalidos'});
        }

         // Utilizando fileURLToPath para obter o caminho do diretório atual
         const currentDir = path.dirname(fileURLToPath(import.meta.url));

        // Cria um nome único para o arquivo
        const fileName = `${title.replace(/\s+/g, '_').toLowerCase()}_${Date.now()}${path.extname(req.file.originalname)}`;

        // Define o caminho onde o arquivo será salvo
        const filePath = path.join(currentDir, '../../public/uploads', fileName);

         // Salva o arquivo no sistema de arquivos
        await fs.writeFile(filePath, req.file.buffer);

        // Armazena o caminho da imagem no banco de dados
        const imageUrl = `/uploads/${fileName}`

        const newSport = new SportModel({ title, description, imageUrl});

        const savedSport = await newSport.save();
        res.status(201).json(savedSport);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o esporte', details: error.message });
    }
};

