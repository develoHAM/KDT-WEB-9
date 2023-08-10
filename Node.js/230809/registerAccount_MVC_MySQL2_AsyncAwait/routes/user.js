// const express = require('express')
// const controller = require('../controller/Cuser')

import express from 'express'
import * as controller from '../controller/Cuser.js'

const router = express.Router()

//PORT
router.get('/', controller.index);

//SIGNUP
router.get('/signup', controller.signupGet);

router.post('/signup', controller.signupPost);

//SIGNIN
router.get('/signin', controller.signinGet);

router.post('/signin', controller.signinPost);

//PROFILE
router.post('/profile', controller.profilePost);

router.patch('/profile/edit', controller.profileEdit);

router.delete('/profile/delete', controller.profileDelete);

export default router;