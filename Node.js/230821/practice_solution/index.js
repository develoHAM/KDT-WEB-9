const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express()
const PORT = 8000

app.set('view engine', 'ejs')

app.use('/uploads', express.static(__dirname + '/uploads'))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const newName = path.basename(file.originalname, ext) + Date.now() + ext
        cb(null, newName)
    }
})
const upload = multer({storage})

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/uploads', upload.array('files'), (req, res) => {
    res.send(req.files)
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})