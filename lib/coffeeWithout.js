var Promise = require("bluebird"),
  fs = Promise.promisifyAll(require('fs-extra')),
  del = require('../lib/delFile');

var files =  ['/src/coffee'];


function coffeeWithout(project){
  return Promise.all([del(project,files)])
    .then(function(){
      return  console.log('remove coffee success');
    })
}


module.exports = coffeeWithout;
