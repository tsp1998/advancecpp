function btn(val) {
	var expn=document.getElementById('expn').value;
	if(val=='x'){
		expn = document.getElementById('expn').value.slice(0,-1);
		document.getElementById('expn').value=expn;
		setVal('expn1',expn);
		setVal('expn2',expn);
		setVal('expn3',expn);
		setVal('expn4',expn);
		return;
	}else if(val=='c'){
	document.getElementById('expn').value='';
	setVal('expn1','');
	setVal('expn2','');
	setVal('expn3','');
	setVal('expn4','');
		return;
	}
	expn=expn+val;
	document.getElementById('expn').value=expn;
	setVal('expn1',expn);
	setVal('expn2',expn);
	setVal('expn3',expn);
	setVal('expn4',expn);
}