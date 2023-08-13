// mysql 모듈 불러오기
// const mysql = require('mysql')

// mysql2 모듈
import mysql from 'mysql2/promise'

//createConnection : 단일연결, 매번 연결이 필요할 때마다 새로운 연결 생성 
//연결수가 많아지면 성능에 영향이 생김
// const conn =  mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'visitor',
//     password: '1234',
//     database: 'kdt9',
//     port: '3306'
// });

// mysql 연결 
// conn.connect((err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('mysql connect successful')
// })

//createPool: 여러연결, 여러개의 연결을 미리 생성하고 관리
//요청이 들어올때마다 생성한 연결을 할당. 동시처리 가능
const conn = mysql.createPool({
    host: '127.0.0.1',
    user: 'visitor',
    password: '1234',
    database: 'kdt9',
    port: '3306'
})

export const Signup = async (data) => {
    // const query = `INSERT INTO newuser (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`
    // conn.query(query, (err, rows) => {
    //     if (err) {
    //         console.log(err);
    //         return ({result: false})
    //     } else {
    //         return({result: true})
    //     }
    // })
    try {
        // const query1 = `SELECT * FROM newuser WHERE userid= ?`
        // const [rows] = await conn.query(query1, [data.userid]);
        // console.log(rows[0].name)
        const query = `INSERT INTO newuser (userid, name, pw) VALUES (?, ?, ?)`;
        const rows = await conn.query(query, [data.userid, data.name, data.pw]);
        console.log('rowssssssssss',rows)
        return ({result: true});
    } catch (error) {
        console.log(error)
        return ({result: false});
    }
}

export const Signin = async (data) => {
    // const query = `SELECT * FROM newuser WHERE userid='${data.userid}' AND pw='${data.pw}'`
    // conn.query(query, (err, rows) => {
    //     if (err) {
    //         console.log(err);
    //         callback({result: false})
    //     } else {
    //         console.log(rows)
    //         callback({result: true, userdata: rows})
    //     }
    // })
    try {
        const query = `SELECT * FROM newuser WHERE userid= ? AND pw= ?`
        const [rows] = await conn.query(query, [data.userid, data.pw])
        console.log('WHEREEEEEEEE', rows)
        if (rows.length > 0) {
            return({result: true, userdata: rows})
        } else {
            return({result: false})
        }
    } catch (error) {
        console.log(error)
    }
}

export const renderProfile = async (data) => {
    // const query = `SELECT * FROM newuser WHERE id=${data.id}`
    // conn.query(query, (err, rows) => {
    //     if (err) {
    //         console.log(err);
    //         callback({result: false})
    //     } else {
    //         console.log('profile', rows)
    //         callback({result: true, userdata: rows})
    //     }
    // })
    try {
        const query = `SELECT * FROM newuser WHERE id= ?`
        const [rows] = await conn.query(query, [data.id])
        console.log('renderProfile ROWS',rows)
        return({result: true, userdata: rows})
    } catch (error) {
        console.log(error)
        return({result: false})
    }
}

export const editProfile = async (data) => {
    // const query = `UPDATE newuser SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id=${data.id}`
    // conn.query(query, (err, rows) => {
    //     if(err) {
    //         console.log(err);
    //         callback({result: false})
    //     } else {
    //         console.log('edit Profile ROWS', rows)
    //         callback({result: true})
    //     }
    // })
    try {
        const query = `UPDATE newuser SET userid= ?, name= ?, pw= ? WHERE id= ?`
        const rows = await conn.query(query, [data.userid, data.name, data.pw, data.id])
        console.log('editProfileeeeeeeeeeeeee', rows)
        return({result: true})
    } catch (error) {
        return({result: false})
    }
}

export const deleteProfile = async(data) => {
    // const query = `DELETE FROM newuser WHERE id=${data.id}`
    // conn.query(query, (err, rows) => {
    //     if(err) {
    //         console.log(err)
    //         callback({result: false})
    //     } else {
    //         console.log('delete Profile ROWS', rows)
    //         callback({result: true})
    //     }
    // })
    try {
        const query = `DELETE FROM newuser WHERE id= ?`
        let rows = conn.query(query, [data.id])
        return({result: true})
    } catch (error) {
        return({result: false})
    }
}