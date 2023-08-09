const mysql = require('mysql')

// mysql connect
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'visitor',
    password: '1234',
    database: 'kdt9',
    port: '3306'
});

conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connect to mysql');
});

exports.signupPost = (data, callback) => {
    const query = `INSERT INTO user (userid, name, pw) VALUES ('${data.id}','${data.name}','${data.pw}')`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            callback({result: false})
            return;
        }
        callback({result: true})
    });
}

exports.signinPost = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.id}' AND pw='${data.pw}'`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }

        if (rows != "") {
            callback(rows)
            return;
        } else {
            callback({result: false})
        }
    })
}

exports.profileEdit = (data, callback) => {
    const query = `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        callback({result: true})
    })
}

exports.profileDelete = (data, callback) => {
    const query =  `DELETE FROM user WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        callback({result: true})
    })
}