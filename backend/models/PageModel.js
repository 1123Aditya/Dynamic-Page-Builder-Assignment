const pool = require('../db');

const PageModel = {
    createTable: async () => {
        const sql = `CREATE TABLE IF NOT EXISTS pages (
            id INT AUTO_INCREMENT PRIMARY KEY,
            page_name VARCHAR(100),
            page_desc VARCHAR(255),
            route VARCHAR(100),
            table_name VARCHAR(100)
        )`;
        await pool.query(sql);
    },
    insert: async (page) => {
        const { page_name, page_desc, route, table_name } = page;
        const sql = `INSERT INTO pages (page_name, page_desc, route, table_name) VALUES (?, ?, ?, ?)`;
        const [result] = await pool.query(sql, [page_name, page_desc, route, table_name]);
        return result.insertId;
    },
    getAll: async () => {
        const [rows] = await pool.query('SELECT * FROM pages');
        return rows;
    }
};

module.exports = PageModel;
