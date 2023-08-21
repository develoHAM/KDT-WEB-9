const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const PORT = 8000;

app.set('view engine', 'ejs')

app.use('/uploads', express.static(__dirname + '/uploads'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

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
const limits = {
    fileSize: 5 * 1024 * 1024
}
const upload = multer({storage, limits})

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/upload', upload.array('userfiles'), (req, res) => {
    console.log('req.files ====', req.files)
    console.log('req.body ====', req.body)
    res.send(req.files)
})


app.use('*', (req, res) => {
    res.render('404')
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})