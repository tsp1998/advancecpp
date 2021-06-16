function sqrt(num) {
	return Math.sqrt(num).toFixed(4);
}

function cbrt(num) {
	return Math.cbrt(num).toFixed(4);
}

function sqrt(num) {
	return Math.sqrt(num).toFixed(4);
}

function sqrt(num) {
	return Math.sqrt(num).toFixed(4);
}

function sqr(num) {
	return Math.pow(num,2).toFixed(4);
}

function cube(num) {
	return Math.pow(num,3).toFixed(4);
}

function nth(num,n) {
	return Math.pow(num,n).toFixed(4);
}

function sum(fn,start,end) {
	var result = 0;
	for (var i = start; i < end; i++) {
		result += eval(fn.replace('n',i.toString()));
	}
	return result.toFixed(4);
}

function dervtv(fn,v) {
	return math.derivative(fn, v);
}

function dervtvEval(fn,v,val) {
	var result = math.derivative(fn, v);
	result = result.toString();
	result = result.replace(v,val);
	// alert(result);
	return Number(math.eval(result)).toFixed(4);
}

function derivative_(){
	Expression=document.getElementById('Expression').value;
	var Derivative;
	if(Expression=='sinx')Derivative='cosx';
	if(Expression=='cosx')Derivative='-sinx';
	if(Expression=='tanx')Derivative='sec<sup>2</sup>x';
	document.getElementById('result').innerHTML ='Derivative of '+Expression+' : '+Derivative;
}

function integration_(){
	Expression=document.getElementById('Expression').value;
	var Derivative;
	if(Expression=='sinx')Derivative='-cosx';
	if(Expression=='cosx')Derivative='sinx';
	if(Expression=='sec2x')Derivative='tanx';
	document.write('<style>.Output{color:darkblue; font-size:30px;}</style>');
		document.write('<br><br><br><br><br><br>');
		document.write('<center>');
		 document.write('<div class="Output">');
	 	document.write('Derivative of '+Expression+' : '+Derivative);
	 	document.write('</div>');
		document.write('</center>');		
}