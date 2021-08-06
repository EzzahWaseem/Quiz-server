

import express from 'express';
import mongoose from 'mongoose';

import PostMessage  from "../models/postMessage.js";
import Score  from "../models/score.js";


const router = express.Router();

export const getList = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createList = async (req, res) => {
    const { questions, optiona, optionb, optionc, answer } = req.body;
    const newPostMessage = new PostMessage({ questions, optiona, optionb, optionc, answer })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateList = async (req, res) => {
    const { id } = req.params;
    const { questions, optiona, optionb, optionc, answer } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No question with id: ${id}`);

    const updatedPost = { questions, optiona, optionb, optionc, answer, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deleteList = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No question with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Question deleted successfully." });
}

export const getScores = async (req, res) => { 
    try {
        const scores = await Score.find();
        res.status(200).json(scores);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createScores = async (req, res) => {
    const { name, score } = req.body;
    const newScore = new Score({  name, score })

    try {
        await newScore.save();

        res.status(201).json(newScore );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;