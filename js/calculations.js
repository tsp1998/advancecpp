function prime_cal_(Num) {
	if(Num<2)return 0;
		for (var i = 2 ; i <Num/2 ; i++)
			if(Num%i==0)return 0;
		return 1;
}

function fib_cal_(Num) {
	if(Num==0)return 0;if(Num==1)return 1;
		return fib_cal_(Num-1)+fib_cal_(Num-2);
}

function armstrong_cal_(Num){
		var Digits=Num.toString().length;
	var Temp=Num,Result=0;
	while(Temp!=0){
	    var rem=Temp%10;
	    Result+=Math.pow(rem,Digits);
	    Temp/=10;
	    Temp=Math.floor(Temp);
	}
	if(Num==Result)return 1;
	else return 0;
}


// function avg_() {

// 	Expression=document.getElementById('Expression').value;
// 	var Nums=Expression.split(",",10);
// 	document.getElementById('Result').innerHTML=Nums;
// 	var Result;
// 	for (var i = Start ; i <Nums.length; i++)
// 			Result+=number(Nums[i]);
// alert("hi");
// 	document.getElementById('Result').innerHTML=Result;
// }