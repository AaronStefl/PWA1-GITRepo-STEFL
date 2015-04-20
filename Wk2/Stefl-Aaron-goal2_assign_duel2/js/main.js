
//Aaron Stefl	
//goal1 duel1 week 1

/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

//console.log FIGHT!!!
    console.log("FIGHT!!!");

//----Changed player One & Two, to 1&2 with Array w/index 0-2 (name, damage, health)
//added arrays for player One & Two 
//add var player names (Spiderman, Batman)
    //player name	
	var player1 = [];
		player1[0] = "Spider man's Cousin";
		player1[1] = "20";
		player1[2] = "100";
	var size = player1.length;
	
	var player2 = [];
		player2[0] = "Batman's Cousin";
		player2[1] = "20";
		player2[2] = "100";
	var size = player2.length;
	
	
	

//initiate the round
    //initiate round
    var round=0;

	
	//----Changed player names to match array index....
//changed player Name to players & playerHealth name	
//add function fight - player 1&2 Health alerts
    function fight(){
        alert(player1[0]+":"+player1[2]+"  *START*  "+player2[0]+":"+player2[2]);
        for (var i = 0; i < 10; i++)
        {

	//----Changed player names to match array index....
//add math floor and math random to generate damage to take away other players health			
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1[1] * .5;
            var minDamage2 = player2[1] * .5;
            var f1 = Math.floor(Math.random()*(player1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2[1]-minDamage2)+minDamage2);

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
    fight();

})();