const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

//임시 데이터
const comments = [
    {
        id: 1,
        userid: 'kdw',
        date: '2023-08-05',
        comment: '안녕하세요'
    },
    {
        id: 2,
        userid: 'happy',
        date: '2023-08-09',
        comment: '반갑습니다'
    },
    {
        id: 3,
        userid: 'sad',
        date: '2023-08-13',
        comment: '슬퍼용'
    },
    {
        id: 4,
        userid: 'lucky',
        date: '2023-08-29',
        comment: '행복하세요'
    }
];

module.exports = comments