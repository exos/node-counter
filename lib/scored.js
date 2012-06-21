
var Scored = function () {
    this.initialize.apply(this,arguments);
}

Scored.prototype = {

    initialize: function (options) {
        
        var options = options || {};
        
        this._items = {};
        
        this._itemscount = options.itemscount || 100;
        
    },
    
    _addnew: function (id, score) {
        
        if (this._items.length >= this._itemscount) {
            return;
        }
        
        this._items[id] = score;
        
    },

    push: function (id, score) {

	var score = score || 1;

	if (typeof this._items[id] != 'undefined') {
		this._items[id]++;
	} else {
		this._addnew(id,score);
	}
  
    },
    
    getTop: function (n) {
      
	var sortable = [];
      
	for (i in this._items)
		sortable.push([i,this._items[i]]);
      
        var sort = sortable.sort(function (a,b) { return b[1]-a[1]; });
	sort = sort.slice(0,n);
	
	var res = {};
	
	for (var i = 0; i < sort.length; i++) {
		res[sort[i][0]] = sort[i][1];
	}
	
	return res;
	
    }

};
    

module.exports = Scored;