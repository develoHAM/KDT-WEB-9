// const mysql = require('mysql')
import mysql from 'mysql2/promise';

// mysql connect

//createConnection : 단일연결, 매번 연결이 필요할 때마다 새로운 연결 생성 
//연결수가 많아지면 성능에 영향이 생김
// const conn = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'visitor',
//     password: '1234',
//     database: 'kdt9',
//     port: '3306'
// });

// conn.connect((err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('connect to mysql');
// });

//createPool: 여러연결, 여러개의 연결을 미리 생성하고 관리
//요청이 들어올때마다 생성한 연결을 할당. 동시처리 가능
const conn = mysql.createPool({
    host: '127.0.0.1',
    user: 'visitor',
    password: '1234',
    database: 'kdt9',
    port: '3306'
});

export const signupPost = async (data) => {
    try {
        const query = 'INSERT INTO user (userid, name, pw) VALUES (?, ?, ?)';
        console.log(data)
        const rows = await conn.query(query, [data.userid, data.name, data.pw])
        return rows;
    } catch (error) {
        console.log(error)
    }
}

export const signinPost = async (data) => {
    try {
        const query = 'SELECT * FROM user WHERE userid= ? AND pw= ?'
        const [rows] = await conn.query(query, [data.id, data.pw]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

export const profilePost = async (data) => {
    try {
        const query = `SELECT * FROM user WHERE userid= ?`;
        const [rows] = await conn.query(query, [data.userid]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

export const profileEdit = async (data) => {
    try {
        const query = `UPDATE user SET userid= ?, name= ?, pw= ? WHERE id= ?`;
        await conn.query(query, [data.userid, data.name, data.pw, data.id])
    } catch (error) {
        console.log(error)
    }
}

export const profileDelete = async (data) => {
    try {
        const query = `DELETE FROM user WHERE id= ?`
        await conn.query(query, [data.id])
    } catch (error) {
        console.log(error)
    }
}