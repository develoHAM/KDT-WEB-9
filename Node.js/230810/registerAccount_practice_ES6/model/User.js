// mysql 모듈 불러오기
// const mysql = require('mysql')
import mysql from 'mysql2/promise'

// mysql 새로운 연결 생성
// const conn =  mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'visitor',
//     password: '1234',
//     database: 'kdt9',
//     port: '3306'
// });

const conn = mysql.createPool({
    host: '127.0.0.1',
    user: 'visitor',
    password: '1234',
    database: 'kdt9',
    port: '3306'
})

// mysql 연결 상태 확인
// conn.connect((err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('mysql connect successful')
// })


export const Signup = (data, callback) => {
    const query = `INSERT INTO newuser (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            callback({result: false})
            return;
        } else {
            callback({result: true})
        }
    })
}

export const Signin = (data, callback) => {
    const query = `SELECT * FROM newuser WHERE userid='${data.userid}' AND pw='${data.pw}'`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            callback({result: false})
        } else {
            console.log(rows)
            callback({result: true, userdata: rows})
        }
    })
}

export const renderProfile = (data, callback) => {
    const query = `SELECT * FROM newuser WHERE id=${data.id}`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            callback({result: false})
        } else {
            console.log('profile', rows)
            callback({result: true, userdata: rows})
        }
    })
}

export const editProfile = (data, callback) => {
    const query = `UPDATE newuser SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id=${data.id}`
    conn.query(query, (err, rows) => {
        if(err) {
            console.log(err);
            callback({result: false})
        } else {
            console.log('edit Profile ROWS', rows)
            callback({result: true})
        }
    })
}

export const deleteProfile = (data, callback) => {
    const query = `DELETE FROM newuser WHERE id=${data.id}`
    conn.query(query, (err, rows) => {
        if(err) {
            console.log(err)
            callback({result: false})
        } else {
            console.log('delete Profile ROWS', rows)
            callback({result: true})
        }
    })
}