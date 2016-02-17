var thunkify = require("thunkify");

module.exports =addProto;

function addProto(obj) {
    obj=obj==null?Function:obj;
    Object.defineProperty(obj.prototype,'thunkify', {
        enumerable: false,
        configurable: false,
        get: function () {
            return thunkify(this);
        }
    });
}
