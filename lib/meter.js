
var Meter = function () {
    this.initialize.apply(this,arguments);
}

Meter.prototype = {

    initialize: function (options) {
        
        var options = options || {};
        
        this._value = 0;
        this._count = 0;
        this._history = [];
        
        this._maxhistory = options.maxhistory || 50;
        
    },
    
    _addToHistory: function (c) {
        
        if (this._history.length >= this._maxhistory) {
            this._history.shift();
        }
        
        this._history.push(c);
        
    },

    push: function (c) {
        this._value += c;
        this._count++;
        this._addToHistory(c);
    },
    
    get: function (c) {
        return (this._value / this._count);
    },
   
    getHistory: function (c) {
        
        if (c) {
            return this._history.slice(0 - Math.abs(c));
        } else {
            return this._history;
        }
        
    }

};
    

module.exports = Meter;