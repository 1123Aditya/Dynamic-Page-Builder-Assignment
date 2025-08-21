const pool = require('../db');

const FieldModel = {
    createTable: async () => {
        const sql = `CREATE TABLE IF NOT EXISTS fields (
            id INT AUTO_INCREMENT PRIMARY KEY,
            page_id INT,
            field_name VARCHAR(100),
            field_label VARCHAR(100),
            field_type VARCHAR(50),
            is_primary_key BOOLEAN DEFAULT FALSE,
            is_foreign_key BOOLEAN DEFAULT FALSE,
            ref_table VARCHAR(100),
            ref_column VARCHAR(100),
            is_required BOOLEAN DEFAULT FALSE,
            validation_rules JSON,
            FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE
        )`;
        await pool.query(sql);
    },
    insert: async (field) => {
        const { page_id, field_name, field_label, field_type, is_primary_key, is_foreign_key, ref_table, ref_column, is_required, validation_rules } = field;
        const sql = `INSERT INTO fields (page_id, field_name, field_label, field_type, is_primary_key, is_foreign_key, ref_table, ref_column, is_required, validation_rules) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const [result] = await pool.query(sql, [page_id, field_name, field_label, field_type, is_primary_key, is_foreign_key, ref_table, ref_column, is_required, JSON.stringify(validation_rules)]);
        return result.insertId;
    },
    getByPageId: async (page_id) => {
        const [rows] = await pool.query('SELECT * FROM fields WHERE page_id = ?', [page_id]);
        return rows;
    }
};

module.exports = FieldModel;
