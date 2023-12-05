import { SportModel } from "../models/sportModel.js";

export const createSport = async(req, res) => {
    try {
        const {title, description} = req.body;

        if(!title || !description){
            return res.status(400).json({erro: 'Dados invalidos'});
        }

        const {buffer, mimetype} = req.body;

        const newSport = new SportModel({ title, description, image: buffer, imageType: mimetype});

        const savedSport = await newSport.save();
        res.status(201).json(savedSport);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o esporte', details: error.message });
    }
};

