const express = require('express');
const questionsModel = require('../models/question.model');
const questionRouter = express.Router();


questionRouter.get("/",async(req,res)=>{
    let {difficulty,category,limit} = req.body
    try {
        let data = await questionsModel.find({difficulty:difficulty,category:category}).limit(limit)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})




module.exports = questionRouter