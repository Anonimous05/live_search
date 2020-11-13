const express = require('express');
const fileData = require('../fileData');

const bridge = express.Router();

bridge.get('/:name', async (req,res) => {
    try {
        const processor = await fileData.findProc(req.params.name);
        res.send(processor);
    }catch (error) {
        res.status(404).send(error);
    }
});

module.exports = bridge;