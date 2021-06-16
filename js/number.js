function armstrong(num) {
	var digits=num.toString().length;
	var temp=num,result=0;
	while(temp!=0){
	    var rem=temp%10;
	    result+=Math.pow(rem,digits);
	    temp/=10;
	    temp=Math.floor(temp);
	}
	if(num==result)return 1;
	else return 0;
}

function factors(num) {
	num=Number(num);
	var result="";
		for (var i = 1 ; i <num/2+1 ; i++)
			if(num%i==0)
				result=result.concat(i.toString()+',');

	result=result.slice(0,result.length-1); 				
	return result;
}

function prime(num) {
	num=Number(num);
	if(num<2)return 0;
		for (var i = 2 ; i <num/2 ; i++)
			if(num%i==0)return 0;
	return 1;
}

function fibo(num) {
	if(num==0)return 0;if(num==1)return 1;
		return fibo(num-1)+fibo(num-2);
}

function divisible(num, divisor){
	if(num%divisor == 0)
	return true;
	return false;
}