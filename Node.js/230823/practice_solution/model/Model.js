const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

const model = [
    {
        id: 1,
        name: '김대원',
        gender: '남자',
        major: '디자인컴퓨팅',
    },
    {
        id: 2,
        name: '이해원',
        gender: '여자',
        major: '영어',
    },
    {
        id: 3,
        name: '강호원',
        gender: '남자',
        major: '중국어',
    },
    {
        id: 4,
        name: '이지현',
        gender: '여자',
        major: '기계공학',
    },
    {
        id: 5,
        name: '박수원',
        gender: '남자',
        major: '건축',
    },
]

module.exports = model