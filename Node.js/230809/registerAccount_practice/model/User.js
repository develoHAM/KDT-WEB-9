// mysql 모듈 불러오기
const mysql = require('mysql')
// mysql 새로운 연결 생성
const conn =  mysql.createConnection({
    host: '127.0.0.1',
    user: 'visitor',
    password: '1234',
    database: 'kdt9',
    port: '3306'
});
// mysql 연결 상태 확인
conn.connect((err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('mysql connect successful')
})
// 입력된 회원 데이터를 MySQL 테이블에 추가, 성공하면 {result: true} 반환, 실패하면 {result: false} 반환
module.exports.Signup = (data, callback) => {
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
// 입력된 회원 데이터를 MySQL 테이블에서 조회, 일치하는 회원 정보가 있다면 {result: true} 반환, 일치하는 회원 정보가 조회되지 않는다면 {result: false} 반환
module.exports.Signin = (data, callback) => {
    const query = `SELECT * FROM newuser WHERE userid='${data.userid}' AND pw='${data.pw}'`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log('rowssss = ', rows)
            console.log('rowssssLENGTH = ', rows.length)
            if (rows.length > 0) {
                callback({result: true, userdata: rows})
            } else {
                callback({result: false})
            }
        }
    })
}
// 전달받은 회원 데이터의 테이블 id값을 MySQL 테이블에서 조회하고 해당 id값이 포함되어있는 테이블 row를 userdata의 키값으로 설정하여 {result: true}와 함께 반환
module.exports.renderProfile = (data, callback) => {
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
// 입력된 회원 데이터 정보를 MySQL 테이블에서 동일한 테이블 id값을 찾아서 해당 회원정보에 갱신, 성공하면 {result: true} 반환, 실패하면 {result: false} 반환
module.exports.editProfile = (data, callback) => {
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
// 회원의 테이블 id정보를 받아와서 MySQL 테이블에서 동일한 테이블 id값을 찾고 해당 회원정보를 삭제, 성공하면 {result: true} 반환, 실패하면 {result: false} 반환
module.exports.deleteProfile = (data, callback) => {
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

