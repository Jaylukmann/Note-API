const express = require('express');
const Note = require('../models/noteModel');

const router = express.Router();

router.get('/api/note', async (req, res, next) => {
    try {
        const notes = await Note.find();
        res.json({
            status: 'success',
            data: notes
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;