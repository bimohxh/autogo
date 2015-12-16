var Promise = require("bluebird"),
  fs = Promise.promisifyAll(require('fs-extra')),
  del = require('../lib/delFile');

var files =  ['/src/sass'];


function sassWithout(project){
  return Promise.all([del(project,files)])
    .then(function(){
      return  console.log('remove sass success');
    })
}


module.exports = sassWithout;
