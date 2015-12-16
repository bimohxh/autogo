var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra'));


function generateStructure(project,outs){
  return fs.copyAsync('structure', project)
    .then(function(err){
      return err ?  console.error(err) : console.log('generate project success');
    })
}


module.exports = generateStructure;
