const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 정적 파일 설정
app.use('/uploads', express.static(__dirname + '/uploads'));

// multer
// const upload = multer({
//     // dest: 업로드 할 파일을 저장할 경로를 지정
//     dest: 'uploads/'
// })
const uploadDetail = multer({
    // storage: 저장할 공간에 대한 정보
    // diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            console.log('ext', ext);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    limits: {fileSize: 5 * 1024 * 1024},
});

const practice1multer = multer({
    // storage: 저장할 공간에 대한 정보
    // diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            console.log('ext', ext);
            done(null, req.body.id + ext);
        }
    }),
    limits: {fileSize: 5 * 1024 * 1024},
});

// router
app.get('/', (req, res) => {
    res.render('index');
}) 

// 싱글
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
})

//멀티 ver1
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
    console.log(req.files);
    console.log(req.body);
})

//멀티 ver2
app.post('/upload/fields', uploadDetail.fields([{name: 'userfile1'},{name: 'userfile2'}]), (req, res) => {
    console.log(req.files)
    console.log(req.body)
})

// 동적 파일 
app.post('/dynamicFile', uploadDetail.single('dynamic-file'), (req, res) => {
    console.log(req.file);
    res.send(req.file);
})

//practice1
app.get('/practice1', (req, res) => {
    res.render('practice1');
}) 
app.post('/practice1server', practice1multer.single('profile-pic'), (req, res) => {
    console.log('req.body', req.body)
    console.log('req.body.id', req.body.id)
    console.log('req.file', req.file)
    res.send(req.file);
})


// server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})