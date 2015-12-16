var Promise = require("bluebird");

function deal(project,outs){
  return outs.map(function(item){
    var action = require('../lib/'+item+'Without');
    return action(project)
  }) 
}



function withoutFile(project,outs){
  return Promise.all([deal(project,outs)])
}


module.exports = withoutFile;
