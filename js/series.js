/*
series made by tsp in javascript
*/

function armstrong_series_(){
	Expression=document.getElementById('Expression').value;
		Start=Expression.slice(0,Expression.search(','));
		Last=Expression.slice(Expression.search(',')+1,Expression.length);
		Start=Number(Start);
		Last=Number(Last);
	var Result="";

		for (var i = Start ; i <Last ; i++)
			if(armstrong_cal_(i))
				Result=Result.concat(i.toString()+',');

	Result=Result.slice(0,Result.length-1); 				
	document.getElementById('Result').innerHTML=Result;
}

function primeSer(start,end) {
	var result="";
	for (var i = start ; i <end ; i++)
	if(prime(i))
		result=result.concat((i).toString()+',');
	
	return result.slice(0,-1);
}

function armSer(start,end) {
	var result="";
	for (var i = start ; i <end ; i++)
	if(armstrong(i))
		result=result.concat((i).toString()+',');
	
	return result.slice(0,-1);
}

function fibSer(start,end) {
	var result="";
	for (var i = start ; i <end ; i++)
		result=result.concat(fibo(i).toString()+',');
	
	return result.slice(0,-1);
}


function prime_series_() {
	Expression=document.getElementById('Expression').value;
	Start=Expression.slice(0,Expression.search(','));
	Last=Expression.slice(Expression.search(',')+1,Expression.length);
	Start=Number(Start);
	Last=Number(Last);
	var Result="";
	for (var i = Start ; i <Last; i++)
		if(prime_cal_(i))
			Result=Result.concat(i.toString()+',');

	Result=Result.slice(0,Result.length-1); 				
	document.getElementById('Result').innerHTML=Result;
}