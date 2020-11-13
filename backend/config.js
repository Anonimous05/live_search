const path = require('path');

const mainFile = __dirname;

module.exports = {
    mainFile,
    uploadPath: path.join(mainFile, 'public', 'uploads'),
    port: 8000,
};