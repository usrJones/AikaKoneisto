const mysql = require("mysql2")
const dotenv = require("dotenv")
dotenv.config()

const pool = mysql.createPool ({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWD,
    database: process.env.MARIADB_DATABASE
}).promise()

async function getTaskRows() {
    const [rows] = await pool.query("select * from task_rows")
    return rows
}
exports.getTaskRows = getTaskRows;

async function getTaskRow(id) {
    const [rows] = await pool.query(`
        select *
        from task_rows
        where ID = ?
    `, [id])
    return rows[0]
}
exports.getTaskRow = getTaskRow;

async function createTaskRow(created_timestamp, start_timestamp, end_timestamp, hour_amount, task, project){
    const [result] = await pool.query(`
        insert into task_rows (created_timestamp, start_timestamp, end_timestamp, hour_amount, task, project)
        values (?,?,?,?,?,?)
    `, [created_timestamp, start_timestamp, end_timestamp, hour_amount, task, project])
    const id = result.insertId
    return getTaskRow(id)
}
exports.createTaskRow = createTaskRow;

//const result = await createTaskRow('2025-02-24 14:00:00','2025-02-24 14:00:00','2025-02-24 14:30:00',0.5,'testi','testi')
//console.log(result)
