const PageModel = require('../models/PageModel');
const FieldModel = require('../models/FieldModel');
const pool = require('../db');

// Initialize tables if not exists
PageModel.createTable();
FieldModel.createTable();

const PageController = {
    createPage: async (req, res) => {
        try {
            const { page_name, page_desc, route, table_name, fields } = req.body;
            
            // Insert page
            const page_id = await PageModel.insert({ page_name, page_desc, route, table_name });

            // Insert fields
            for (let f of fields) {
                await FieldModel.insert({ ...f, page_id });
            }

            // Create actual MySQL table for page
            let columns = fields.map(f => {
                let type = 'VARCHAR(255)';
                if(f.field_type === 'number') type = 'INT';
                else if(f.field_type === 'date') type = 'DATE';
                else if(f.field_type === 'text') type = 'TEXT';

                let pk = f.is_primary_key ? 'PRIMARY KEY' : '';
                return `\`${f.field_name}\` ${type} ${pk}`;
            }).join(', ');

            const createTableSQL = `CREATE TABLE IF NOT EXISTS \`${table_name}\` (${columns})`;
            await pool.query(createTableSQL);

            res.json({ message: 'Page created successfully', page_id });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    getPages: async (req, res) => {
        try {
            const pages = await PageModel.getAll();
            res.json(pages);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = PageController;
