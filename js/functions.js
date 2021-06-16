function prime_() {
	Expression=document.getElementById('Expression').value;
	// if(Expression.search(',')){
	// 	document.getElementById('Expression').style.color='red';
	// 	document.getElementById('Result').innerHTML='Wrong Input';
	// 	return false;
	// }
	Number=Number(Expression);
	document.getElementById('result2').innerHTML='';
	document.getElementById('result2').style.display="inline";
		if(prime_cal_(Num))
			document.getElementById('result2').innerHTML='Number is Prime';
		else
			 document.getElementById('result2').innerHTML='Number is not Prime';
}

function fib_() {
		Expression=document.getElementById('Expression').value;
		Num=Number(Expression);
		document.getElementById('Result').innerHTML='';
			document.getElementById('Result').innerHTML=fib_cal_(Num);
		
}

function armstrong_(){
	Num=document.getElementById('Expression').value;
	if(Num==''){
		document.getElementById('Expression').focus();
		document.getElementById('Expression').placeholder='Empty Expression';
		return;
	}
	var Digits=Num.length;
		Num=Number(Num);

		document.getElementById('result2').innerHTML='';
		document.getElementById('result2').style.display="inline";
		if(armstrong_cal_(Num))
			document.getElementById('result2').innerHTML='Number is Armstrong';
		else
			 document.getElementById('result2').innerHTML='Number is not Armstrong';
}

function factors_(){
	Expression=document.getElementById('Expression').value;
	Num=Number(Expression);
	var Result="";
		for (var i = 1 ; i <Num/2+1 ; i++)
			if(Num%i==0)
				Result=Result.concat(i.toString()+',');

	Result=Result.slice(0,Result.length-1); 				
	document.getElementById('Result').innerHTML=Result;
}


function digit_add_(){
	Expression=document.getElementById('Expression').value;
	var Result=0;
	document.write('<style>.Output{color:darkblue; font-size:30px;}</style>');
		document.write('<br><br><br><br><br><br>');
		document.write('<center>');
		 document.write('<div class="Output">');
		 for (var i = 0; i <Expression.length; i++)
	 	Result+=Number(Expression[i]);
	 	document.write('Addition of Digits of Number '+Expression+' : '+Result);
	 	document.write('</div>');
		document.write('</center>');		
}

function digit_product_(){
	Expression=document.getElementById('Expression').value;
	var Result=1;
	document.write('<style>.Output{color:darkblue; font-size:30px;}</style>');
		document.write('<br><br><br><br><br><br>');
		document.write('<center>');
		 document.write('<div class="Output">');
		 for (var i = 0; i <Expression.length; i++)
	 	Result*=Number(Expression[i]);
	 	document.write('Addition of Digits of Number '+Expression+' : '+Result);
	 	document.write('</div>');
		document.write('</center>');		
}