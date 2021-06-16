function apSer() {
	getApSer();
}

function getApSer() {
	var props = new Array("placeholder");
	var values = new Array("first_term");
	var css = 'text-align : center; width :5px;';
	var first_term = new Input('first_term',props,values);
	first_term.setCSS(css);
	setContent('result4',"<div id='get_first_term'></div>");
	first_term.in('get_first_term');

	var props = new Array("placeholder");
	var values = new Array("diff");
	var css = 'text-align : center; width :5px;';
	var diff = new Input('diff',props,values);
	diff.setCSS(css);
	addContent('result4',"<div id='get_diff'></div>");
	diff.in('get_diff');

	var props = new Array("placeholder");
	var values = new Array("n_val");
	var css = 'text-align : center; width :5px;';
	var n_val = new Input('n_val',props,values);
	n_val.setCSS(css);
	addContent('result4',"<div id='get_n_val'></div>");
	n_val.in('get_n_val');

	var props = new Array("placeholder");
	var values = new Array("nth_term");
	var css = 'text-align : center; width :5px;';
	var nth_term = new Input('nth_term',props,values);
	nth_term.setCSS(css);
	addContent('result4',"<div id='get_nth_term'></div>");
	nth_term.in('get_nth_term');


	addContent('result4',"<center><div id='ap_ser_warn' style='color:red; text-align:center; font-weight:bold;'>You Can't Enter All Values</div></center>");
	hide('ap_ser_warn');
	addContent('result4',"<center><button class='result' onclick=apSerOprn()>Proceed</button></center>");
	addContent('result4',"<center><button class='result' onclick=clrApSer()>Clear</button></center>");
	addContent('result4',"<center><button class='result' onclick=clsApSer()>Close</button></center>");
}

function apSerOprn() {
	var id_arr = new Array('in_first_term','in_n_val','in_diff','in_nth_term');
	var values_arr = new Array(4);
	for (var i = 0; i < id_arr.length; i++) {
			values_arr[i] = getVal(id_arr[i]);
	}

	// values_arr[0] = Number(values_arr[0]);
	// values_arr[1] = Number(values_arr[1]);
	// values_arr[2] = Number(values_arr[2]);
	// values_arr[3] = Number(values_arr[3]);
	makeAllNums(values_arr);

	hide('ap_ser_warn');

	switch(''){
		case values_arr[0]: 
			// alert('p');
			// alert(isArrRem(values_arr));
			if(isArrRem(values_arr)==1)
				setVal(id_arr[0],(values_arr[3] - ((values_arr[1]-1) * values_arr[2])));
		break;
		case values_arr[1]: 
			if(isArrRem(values_arr)==1)
				setVal(id_arr[1],(((values_arr[3] - values_arr[0])/values_arr[2])+1));
		break;
		case values_arr[2]: 
			if(isArrRem(values_arr)==1)
				setVal(id_arr[2],((values_arr[3] - values_arr[0])/(values_arr[1]-1)));
		break;
		case values_arr[3]: 
			if(isArrRem(values_arr)==1)
				setVal(id_arr[3],(values_arr[0] + ((values_arr[1]-1) * values_arr[2])));
		break;
	}
	if(isArrFull(values_arr))
		display('ap_ser_warn');	
}

function clrApSer() {
	var id_arr = new Array('in_first_term','in_n_val','in_diff','in_nth_term');
	for (var i = 0; i < id_arr.length; i++) {
		clrVal(id_arr[i]);
	}
}


function clsApSer() {
	clrContent('result4');
	addContent('result4',"<center><button class='btn_result' id='btn_perform' onclick='operations2()'>Perform</button></center>");	
}