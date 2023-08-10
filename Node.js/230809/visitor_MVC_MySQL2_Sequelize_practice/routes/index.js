import express from 'express';
const router = express.Router();
import * as controller from '../controller/Cvisit.js'

router.get('/', controller.main)

router.get('/visitors', controller.visitors)

router.post('/visitors/register', controller.register)

// router.patch('/visitors/edit', (req, res) => {
    
// })

// router.delete('/visitors/delete', (req, res) => {
    
// })

// router.get('/visitors:id', (req, res) => {
// })
export default router;