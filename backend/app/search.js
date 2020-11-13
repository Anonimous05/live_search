const express = require('express');
const fileData = require('../fileData');

const bridge = express.Router();

bridge.get('/:text', async (req,res) => {
   const processors = await fileData.findWord(req.params.text);
   res.send(processors);
});

module.exports = bridge;