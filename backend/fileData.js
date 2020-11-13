const fs = require("fs");

const readFile = filename => {
  return new Promise((resolve,reject) => {
     fs.readFile(filename,(err,data) => {
        if(err){
            reject(err);
        }else {
            resolve(data);
        }
     });
  });
};

const processorsFile = './processors.json';
let data = [];

module.exports = {
  async initProcessors() {
      try{
          const processors = await readFile(processorsFile);
          data = JSON.parse(processors.toString());
      }catch (error) {
          data = [];
      }
  },
    async findWord(name) {
        if(name === "all"){
            return data;
        }else {
            const processors = [];
            data.forEach(elem => {
                if (elem.name.search(name) > -1) {
                    processors.push(elem);
                }
            });
            return processors;
        }
    },
    async findProc(name) {
      return data.find(proc => proc.name === name);
    },
};
