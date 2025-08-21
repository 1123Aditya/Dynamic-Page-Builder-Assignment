const express = require('express');
const router = express.Router();
const RecordController = require('../controllers/recordController');

router.post('/:table', RecordController.addRecord);
router.get('/:table', RecordController.getRecords);

module.exports = router;  // ✅ Must export router
