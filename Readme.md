# thunkoto

  Module for confort work with [thunk](https://www.npmjs.com/package/thunkify) module. It uses getter for create thunk.

## Installation

```
$ npm install thunkoto
```
## Example
```js 
var fs = require('fs');

require('thunkoto')();

fs.readFile.thunkify('package.json', 'utf8')(function(err, str){
  
});
```

## vs

```js
var thunkify = require('thunkify');
var fs = require('fs');

var read = thunkify(fs.readFile);

read('package.json', 'utf8')(function(err, str){
  
});
```

# License

  MIT
