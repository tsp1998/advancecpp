var Program='';
		function statement_(Code) {
 				var Lines=Code.split('\n');
 				//alert(Lines.length);
 				for (var i =  0; i <Lines.length; i++) {
 					document.write(Lines[i]+"<br>");
 				}
 				document.write(Lines[0][0]);
 		}

 		function concat_(What) {
 			Program=Program.concat(What);
 		}

 		function array_has_(Line) {
 			//int arr[10]; int a,arr[10],b;
 			Type=Line.slice(Line[0],Line.search(' '));
 			Size=Line.slice(Line.search('[')+1,Line.search(']'));

 			if(Line.search(',')>0){
 				if(Line.search(',')>Line.search(',')){
 				
 				}	
 			}
 			Identifier=Line.slice(Line.search('[')+1,Line.search(']'));

 		}

 		function lines_(Lines) {
 			var ScanExist=0;
 				for (var i =  0; i <Lines.length; i++) 
 					if(Lines[i].search('scanf'))
 						ScanExist=1;

 				if(ScanExist)
 					concat_('import java.util.Scanner;<br>public class CodeConvert{<br>');
 					//alert('Program'+Program);

 				for (var i =  0; i <Lines.length; i++) {
 					document.write(Lines[i][Lines[i].length-1]+"<br>");
 					switch(Lines[i][0]){
 						case '#':
 						StrCut=Lines[i].slice(Lines[0].search('<')+1,Lines[0].search('>'));
 						break;
 					}	
 				}
 				concat_('<br>}<br>}');
 		}

 		function action_() {
 			Code=document.getElementById('Code').value;
 			statement_(Code);
 		}

function hello_() {
	alert("hello");
}
