function getVal(id) {
	return document.getElementById(id).value;
}

function setVal(id,value) {
	document.getElementById(id).value=value;
}

function addVal(id,value) {
	document.getElementById(id).value+=value;
}

function getContent(id) {
	return document.getElementById(id).innerHTML;
}

function setContent(id,value) {
	document.getElementById(id).innerHTML=value;
}

function addContent(id,value) {
	document.getElementById(id).innerHTML+=value;
}

function clrContent(id) {
	document.getElementById(id).innerHTML='';
}

function clrVal(id) {
	document.getElementById(id).value='';
}

function display(id) {
	document.getElementById(id).style.display='inline';
}

function hide(id) {
	document.getElementById(id).style.display='none';
}

function validSelect(id) {
	if(document.getElementById(id).value=='-1' || document.getElementById(id).value=='-1'){
		document.getElementById(id).focus();
		return false;
	}
	return true;
}

function validInput(id) {
	if(document.getElementById(id).value==''){
		document.getElementById(id).focus();
		return false;
	}
	return true;
}

function rev(str) {
	return str.split('').reverse().join('');
}

function isDigit(str) {
	return /^\d+$/.test(str);
}

function max(a,b) {
	return a > b ? a : b;
}

function br(){
	document.write('<br>');
}

function print(code){
	document.write(code);
}

function println(code){
	document.write(code);
	document.write('<br>');	
}

function check(){
	alert('tsp');
}

function static(){
	if(typeof static.counter == 'undefined')
	static.counter=0;
	static.counter++;
	return static.counter;
}
