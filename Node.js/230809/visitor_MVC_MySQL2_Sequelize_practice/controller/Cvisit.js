import Visitor from '../models/index.js'
// const Visitor = require('../models/index.js')

export const main = (req, res) => {
    res.render('index');
}

export const visitors = (req, res) => {
    res.render('visitors');
}

export const register = async (req, res) => {
    console.log('check', Visitor.visitor)
    let result; 
    try {
    result = await Visitor.visitor.create({
        name: req.body.name,
        comment: req.body.comment
    })
    } catch (error) {
        console.log(error)
    }
    res.send(result)
}