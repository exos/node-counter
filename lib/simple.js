
var SimpleCounter = function () {
    this.initialize.apply(this,arguments);
}

var InternalCounter = function () {
    this.value = 0;
}

SimpleCounter.prototype = {

    initialize: function () {
        this._value = 0;
    },

    incr: function (c) {
        var c = parseInt(c) || 1;
        this._value += c;
    },
    
    decr: function (c) {
        var c = parseInt(c) || 1;
        this._value -= c;
    },
    
    set: function (c) {
        return this._value = parseInt(c);
    },

    get: function () {
        return this._value;
    }

};
    

module.exports = SimpleCounter;