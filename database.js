const mysql = require("mysql2")
const dotenv = require("dotenv")
dotenv.config()

const pool = mysql.createPool ({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWD,
    database: process.env.MARIADB_DATABASE
}).promise()

/* select * from time_tracking.task_rows;
+----+---------------------+---------------------+---------------------+-------------+-----------------------------+---------------+
| ID | created_timestamp   | start_timestamp     | end_timestamp       | hour_amount | task                        | project       |
+----+---------------------+---------------------+---------------------+-------------+-----------------------------+---------------+
|  1 | 2025-02-25 08:15:30 | 2025-02-25 08:15:30 | 2025-02-25 09:45:30 |        1.50 | poistoputken asennus        | putkihommia   |
|  2 | 2025-02-24 14:00:00 | 2025-02-24 14:00:00 | 2025-02-24 14:30:00 |        0.50 | NULL                        | putkihommia   |
|  3 | 2025-02-24 11:00:00 | 2025-02-24 11:00:00 | 2025-02-24 12:15:00 |        1.25 | takapihan hoito             | ruohonleikkuu |
|  4 | 2025-02-24 10:00:00 | 2025-02-24 10:00:00 | 2025-02-24 11:00:00 |        1.00 | jalkapallokentän viivoitus  | Ruohonleikkuu |
|  5 | 2025-02-24 09:00:00 | 2025-02-24 09:00:00 | 2025-02-24 10:00:00 |        1.00 | hajulukon tyhjennys         | putkihommia   |
|  6 | 2025-02-24 14:00:00 | 2025-02-24 14:00:00 | 2025-02-24 14:30:00 |        0.50 | testi                       | testi         |
+----+---------------------+---------------------+---------------------+-------------+-----------------------------+---------------+
*/

// Select every task row from table task_rows
async function getTaskRows() {
    const [rows] = await pool.query(`
        select id, created_timestamp, start_timestamp, end_timestamp, hour_amount, task, project
        from task_rows order by id desc
    `)
    return rows
}
exports.getTaskRows = getTaskRows;

// Select one task row from table task_rows
/*async function getTaskRow(id) {
    const [rows] = await pool.query(`
        select id, created_timestamp, start_timestamp, end_timestamp, hour_amount, task, project
        from task_rows
        where ID = ?
    `, [id])
    return rows[0]
}
exports.getTaskRow = getTaskRow;*/

// Insert task row into table task_rows
async function createTaskRow(created_timestamp, start_timestamp, end_timestamp, hour_amount, task, project){
    const [result] = await pool.query(`
        insert into task_rows 
        (created_timestamp, start_timestamp, end_timestamp, hour_amount, task, project)
        values (?,?,?,?,?,?)
    `, [created_timestamp, start_timestamp, end_timestamp, hour_amount, task, project])
    const id = result.insertId
    return getTaskRows(id)
}
exports.createTaskRow = createTaskRow;

// Insert manually some hard coded values into table task_rows
//const result = await createTaskRow('2025-02-24 14:00:00','2025-02-24 14:00:00','2025-02-24 14:30:00',0.5,'testi','testi')
//console.log(result)

async function loginAttempt(email) {
    const [rows] = await pool.query("select password_hash from users where email = ?", [email])
    const password_hash = rows[0].password_hash;
    return password_hash
}
exports.loginAttempt = loginAttempt;

async function firstLogin(email) {
    const [rows] = await pool.query("select force_pw_reset from users where email = ?", [email])
    const isFirstLogin = rows[0].force_pw_reset
    return isFirstLogin
}
exports.firstLogin = firstLogin;
