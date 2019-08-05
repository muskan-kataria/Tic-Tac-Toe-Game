   var complete=1;


function init()
{
    
   
    complete=0;
 
}

		var filled;
		var shape;
		var winningCombinations;
		var turn = 0;
		var Canvas;
		var c;
		var cxt;
		var squaresFilled = 0;
var res=0;

		
	window.onload=function(){
			
			filled = new Array();
			shape = new Array();
			winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

			for(var l = 0; l <= 8; l++){
			filled[l] = false;
			shape[l]='';
			}
    }

		//Game methods
		function canvasClicked(canvasNumber){
            
            if(complete==0)
                {
        
                    
                                
           
                    
			Canvas = "canvas"+canvasNumber;
			c = document.getElementById(Canvas);
			cxt = c.getContext("2d");

			if(filled[canvasNumber-1] ==false){
				if(turn%2==0){
					cxt.beginPath();
					cxt.moveTo(10,10);
					cxt.lineTo(90,90);
					cxt.moveTo(90,10);
					cxt.lineTo(10,90);
					cxt.stroke();
					cxt.closePath();
					shape[canvasNumber-1] = 'X';
				}

				else{
					cxt.beginPath();
					cxt.arc(50,50,45,0,Math.PI*2,true);
					cxt.stroke();
					cxt.closePath();
					shape[canvasNumber-1] = 'O';
				}

				turn++;
				filled[canvasNumber-1] = true;
				squaresFilled++;
				

				if(squaresFilled==9){
					alert("THE GAME IS OVER!");
					location.reload(true);
				}
			
			}
			else{
				alert("THAT SPACE IS ALREADY OCCUPIED");
			}
            
           res= checkForWinners(shape[canvasNumber-1]);
            
           
                    
                }
            
                      if(res==1)
            {alert(shape[canvasNumber-1]+" WON!");
             
             setTimeout(function(){
             location.reload(true);
             },1000);
            
            }
            
            

		}

		function checkForWinners(symbol){
			
      
			for(var a = 0; a < winningCombinations.length; a++){
			if(shape[winningCombinations[a][0]]==symbol&&shape[winningCombinations[a][1]]==	symbol&&shape[winningCombinations[a][2]]==symbol){
                complete=1;
                return 1;
			
                
			}
			}
            
            return 0;

		}



