function ArrayStar(size) {
	this.id = 'arr'+static();
	this.size = size;
	var arr;
}

ArrayStar.prototype.inArr = function(id) {
	var arr_id = 'in_'+this.id;
	addContent(id,"<div id='"+arr_id+"' class='arr "+this.class+"'></div>")
	for (var i = 0; i < this.size; i++)
		addContent(arr_id,"<input id='"+arr_id+'_'+i.toString()+"' class='arr_in "+this.class+'_'+i.toString()+"'>");
};

ArrayStar.prototype.getInArr = function() {
	var arr = new Array(this.size);
	for (var i = 0; i < this.size; i++) {
			arr[i] = getVal('in_'+this.id+'_'+i.toString());
	}
	this.arr = arr;
};

ArrayStar.prototype.outArr = function(id) {
	var arr_id = 'out_'+this.id;
	addContent(id,"<div id='"+arr_id+"' class='arr "+this.class+"'></div>")
	for (var i = 0; i < this.size; i++) 
		addContent(arr_id,"<span id='"+arr_id+'_'+i.toString()+" class='arr_out "+this.class+'_'+i.toString()+"'>"+this.arr[i]+"</span>");
};