function reset(which){
				switch(which){
					case 1:
						hide('result1');
						hide('reset_logo1');
						setContent('expand2',"<img width='10px' src='images/icons/down.png'>");
						setContent('expand1','&#176;');
						display('expand1_btns');
					break;
					case 2:
						hide('result2');
						hide('reset_logo2');
						setContent('expand3',"<img width='10px' src='images/icons/down.png'>");
						setContent('expand3','&#176;');
						display('expand3_btns');

					break;
					case 3:
						hide('result3');
						hide('reset_logo3');
					break;
				}
				// document.getElementById('result').innerHTML = "";
				// document.getElementById('result').style.display="none";
				// document.getElementById('reset_logo').style.display="none";
				// document.getElementById('result1').innerHTML = "";
				// document.getElementById('result1').style.display="none";
				// document.getElementById('reset_logo1').style.display="none";
				// document.getElementById('result2').innerHTML = "";
				// document.getElementById('result2').style.display="none";
				// document.getElementById('reset_logo2').style.display="none";
				// document.getElementById('result3').innerHTML = "";
				// document.getElementById('result3').style.display="none";
				// document.getElementById('reset_logo3').style.display="none";
				// document.getElementById('result4').innerHTML = "";
				// document.getElementById('result4').style.display="none";
				// document.getElementById('reset_logo4').style.display="none";
}

function about(){
	document.getElementById('result5').innerHTML = "";
	document.getElementById('result5').style.display="inline";
	document.getElementById('result5').innerHTML='<div class="about">This Calculator is for advanced functioning which are not available in todays calculators.<br>Made by <a href="https://skncse.000webhostapp.com">TSP</a>!</div>';
}