// const User = require('../model/User')
import * as User from '../model/User.js'

export const index = (req,res) => {
    res.render('index');
}

export const signupGet = (req,res) => {
    res.render('signup');
}

export const signinGet = (req,res) => {
    res.render('signin');
}

export const signupPost = async (req, res) => {
    try {
        const result = await User.signupPost(req.body)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

export const signinPost = async (req,res) => {
    try {
        const result = await User.signinPost(req.body);
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

export const profilePost = async (req, res) => {
    try {
        const result = await User.profilePost(req.body);
        res.render('profile', {data: result[0]})
    } catch (error) {
        console.log(error)
    }
}

export const profileEdit = async (req, res) => {
    try {
        await User.profileEdit(req.body);
        res.send({result: true})
    } catch (error) {
        console.log(error)
    }
};

export const profileDelete = async (req, res) => {
    try {
        await User.profileDelete(req.body)
        res.send({result: true})
    } catch (error) {
        console.log(error)
    }
}

