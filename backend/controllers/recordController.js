const pool = require('../db');

const RecordController = {
    addRecord: async (req, res) => {
        try {
            const table = req.params.table;
            const data = req.body;

            const keys = Object.keys(data);
            const values = Object.values(data);

            const sql = `INSERT INTO \`${table}\` (${keys.map(k => `\`${k}\``).join(',')}) VALUES (${keys.map(_ => '?').join(',')})`;
            await pool.query(sql, values);

            res.json({ message: 'Record added successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    getRecords: async (req, res) => {
        try {
            const table = req.params.table;
            const [rows] = await pool.query(`SELECT * FROM \`${table}\``);
            res.json(rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = RecordController;
