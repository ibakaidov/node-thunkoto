var fs = require('fs');

require('thunkoto')();

fs.readFile.thunkify('package.json', 'utf8')(function(err, str){
  
});