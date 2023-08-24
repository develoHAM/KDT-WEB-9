const mysql = require('mysql');

//mysql연결
//createConnection
//단일연결
//요청할때마다 새로운 연결을 생성
//적은 수의 동시연결이나 단순한 데이터베이스 쿼리일때 사용
//createPool
//연결 풀을 생성. 풀은 미리 정의된 수의 연결을 생성하고 관리
//요청이 들어오면 연결 풀에서 사용 가능한 연결을 제공. 작업완료 후 해당 연결 반환
//연결이 필요하지 않을 경우 자동으로 반환. 풀의 연결 수를 제한하고 관리를 최적화
//다중연결 서비스에 적합
// const conn = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'visitor',
//     password: '1234',
//     database: 'kdt9',
//     port: 3306,
// });

const conn = mysql.createPool({
    host: '127.0.0.1',
    user: 'visitor',
    password: '1234',
    database: 'kdt9',
    port: 3306,
    connectionLimit: 30 //최대 연결 수 (기본값 10)
})

//문자열 보간방법
//`INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`
//단점
//1.sql 인젝션 공격 취약
//2. 문자열에 특수문자가 포함될 경우 오류가 발생할수도 있음
//Prepared Statement (? = placeholder)
//`INSERT INTO user (userid, pw, name) VALUES (?,?,?)`

//회원가입 정보 데이터베이스 저장
const db_signup = (data, cb) => {
    // const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`
    // conn.query(query, (err, rows) => {
    //     if(err) {
    //         console.log(err)
    //         return;
    //     }
    //     console.log('db_signup', rows)
    //     cb();
    // })
    const { userid, pw, name } = data
    const query = 'INSERT INTO user (userid, pw, name) VALUES (?,?,?)'
    conn.query(query, [userid, pw, name], (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('db_signup', rows)
        cb();
    })
}

//로그인
const db_signin = (data, cb) => {
    // const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`
    // conn.query(query, (err, rows) => {
    //     if (err) {
    //         console.log(err)
    //         return;
    //     }
    //     console.log('db_signin', rows)
    //     //select문의 쿼리문은 배열로 반환된다
    //     cb(rows);
    // })
    const query = "SELECT * FROM user WHERE userid = ? AND pw = ?"
    const { userid, pw } = data
    conn.query(query, [userid, pw], (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('db_signin', rows)
        //select문의 쿼리문은 배열로 반환된다
        cb(rows);
    })
}

//회원정보 조회
const db_profile = (data, cb) => {
    const query = "SELECT * FROM user WHERE id = ?"
    conn.query(query, data.number, (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('db_profile', rows)
        cb(rows)
    })
}

//회원정보수정
const db_profile_edit = (data, cb) => {
    const query = "UPDATE user SET userid = ?, name = ?, pw = ? WHERE id = ?"
    const {userid, name, pw, id} = data
    conn.query(query, [userid, name, pw , id], (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('db_profile_edit', rows)
        cb()
    })
}

module.exports = {
    db_signup,
    db_signin,
    db_profile,
    db_profile_edit
}