var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra'));



var root = __dirname.replace(/autogo\/lib/,'autogo/')
function generateStructure(project,outs){
  return fs.copyAsync(root + 'structure', project)
    .then(function(err){
      return err ?  console.error(err) : console.log('generate project success');
    })
}


module.exports = generateStructure;
