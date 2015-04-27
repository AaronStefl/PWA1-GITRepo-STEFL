
//Aaron Stefl	
//Goal4_assign_duel3
//04/24/2015

/**

 Assignment 3
 Part 3/3 of series
*/
console.log("---line 11---");
// self-executing function
(function(){

//console.log FIGHT!!!
    console.log("FIGHT!!!");
	
	//Set up the DOM querySelector, getElementById
    var playerOne_txt = document.querySelector("#kabal").querySelector("p");       
    var playerTwo_txt = document.querySelector("#kratos").querySelector("p");       
    var round_txt = document.querySelector("h4");       
    var button = document.getElementById("fight_btn");	
	
console.log("---line 24---");
/* //----Changed player One & Two, to 1&2 with Array w/index 0-2 (name, damage, health)
//added arrays for player One & Two 
//add var player names (Spiderman, Batman)
    //player name */


	button.addEventListener("click", fight, false);
		//---Changed to Ojbect array
		//Change player names Kabal, Kratos
    var players = [
		{
        
            name:"Kabal",   
            damage:20,	
            health:100         
        },
        
		{
            name:"Kratos",      
            damage:20,         
            health:100        
        }
	];

        var round = 1;	
	
console.log("---line 50---");
//initiate the round
    //initiate round
		// Now initiate fight button from DOM
    round_txt.innerHTML = "Click To Start Fight";
    playerOne_txt.innerHTML = players[0].name + ":  " + players[0].health;
    playerTwo_txt.innerHTML = players[1].name + ":  " + players[1].health;

	
	//----Changed player names to match array index....
//changed player Name to players & playerHealth name	
//add function fight - player 1&2 Health alerts
        /*---Removed for loop---*/
		//add fight funcion
		function fight(){
		
		playerOne_txt.innerHTML = players[0].name + ":  " + players[0].health;
        playerTwo_txt.innerHTML = players[1].name + ":  " + players[1].health;

        // output damage for players with Math.floor(Math.random)
        var f1 = Math.floor(Math.random() * players[0].damage + players[0].damage * .3);
        var f2 = Math.floor(Math.random() * players[1].damage + players[1].damage * .5);

        // players take damage
        players[0].health -= f1;
        players[1].health -= f2;

        console.log(players[0].health, players[1].health);
		
console.log("---line 75---");
		// checkck for winner
		var result = winnerCheck();
		
		console.log(result);   

        round_txt.innerHTML = "Round " + round + " Results";
        round++;
        
		if (result === "no winner") {
            playerOne_txt.innerHTML = players[0].name + ":  " + players[0].health;
            playerTwo_txt.innerHTML = players[1].name + ":  " + players[1].health;

        } else {
            playerOne_txt.innerHTML = result;
            playerTwo_txt.innerHTML = "";				


console.log("---line 90---");			
//---------------------------BUTTON REMOVE		
			button.removeEventListener("click", fight, false);
			document.querySelector('.buttonblue').innerHTML = 'AGAIN!!!';
		};
	
	};		
		function winnerCheck(){
    
		var result="no winner";

			if (players[0].health < 1 && players[1].health < 1){
        
				result = "You Both Die - GAME OVER!";       // tie game = both lose when both points drop below 1
			}else if(players[0].health < 1){
        
				result = players[1].name + " WINS!"         // player 2 wins if player 1 has less than 1 with points remaining
			}else if (players[1].health < 1){
        
				result = players[0].name + " WINS!"       // player 1 wins if player 1 has less than 1 with points remaining
			};
			return result;
    }


console.log("---line/END 115---");

})();
















/* 
		//----Changed player names to match array index....
//inflict damage to affect opposite players health
            //inflict damage
            player1[2]-=f1;
            player2[2]-=f2;

	//----Changed player names to match array index....		
//set console.log for player 1&2s health
            console.log(player1[0]+": "+player1[2] + " " + player2[0]+":"+player2[2]);
	
	//----Changed player names to match array index....
//add var resuls to do winnerCheck for victor if health is not "0" repeat round
            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(player1[0]+":"+player1[2]+"  *ROUND "+round+" OVER"+"*  "+player2[0]+":"+player2[2]);

            } else{
                alert(result);
                break;
            };

          };
    };

	//----Changed player names to match array index....
//add funcion for winnercheck, if no winner both die after 10 rounds	
    function winnerCheck(){
        var result="no winner";
        if (player1[2]<1 && player2[2]<1)
        {
            result = "You Both Die";
        } else if(player1[2]<1){
            result =player2[0]+" WINS!!!"
        } else if (player2[2]<1)
        {
            result = player1[0]+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
/*     fight();

})(); */ 