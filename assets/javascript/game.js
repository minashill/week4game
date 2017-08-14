$(document).ready(function() {
characters = [
    {
        name: 'big',
        health: 120,
        attack: 50,
        imageUrl: "assets/images/big.jpg",
        enemyAttackBack: 15,
        selected: false,
        enemySel: false
    }, 
    {
        name: 'pac',
        health: 100,
        attack: 70,
        imageUrl: "assets/images/pac.jpg",
        enemyAttackBack: 15,
        selected: false,
	    enemySel: false
    }, 
    {
        name: 'eminem',
        health: 150,
        attack: 25,
        imageUrl: "assets/images/eminem.jpg",
        enemyAttackBack: 20,
        selected: false,
	    enemySel: false
    }, 
    {
        name: 'method',
        health: 180,
        attack: 40,
        imageUrl: "assets/images/method.jpg",
        enemyAttackBack: 20,
        selected: false,
	    enemySel: false
    }];

    var $big = $("#big");
	var $pac = $("#pac");
	var $eminem = $("#eminem");
	var $method = $("#method");
	var turnCounter = 1;
	var attackResult;
	var killCount = 0;
    var selectedChar;
    var selectedOpponent;
    var unselected = [];
    //function chooseChar(){
function startGame() {
		selectChar($big, "big", characters[0], true);
		selectChar($pac, "pac", characters[1],true);
		selectChar($eminem, "eminem", characters[2], true);
		selectChar($method, "method", characters[3], true);
		//$("#attack").hide();
	}
	startGame();

    	function selectChar(id, name, object, bool) {
		id.click(function() {
			if (!selectedChar) {
			player1 = object;
			if (selectedChar === undefined) {
				selectedChar = name;
				object.selected = bool;
			}

			
			$("#select h1").html("Choose Your Opponent");
			$("#select div").css("margin-left", "10%");
			$("#player1").append(id);
			//$("#ring").css("visibility","hidden");
			
			opponentSelect($big, "enemy big", characters[0], true);
			opponentSelect($pac, "enemy pac", characters[1], true);
			opponentSelect($eminem, "enemy eminem", characters[2], true);
			opponentSelect($method, "enemy method", characters[3], true);
		}
		});
	}
	function opponentSelect(id, name, object, bool) {
		id.click(function() {
			player2 = object;
			selectedOpponent = name;
			object.enemySel = bool;
			$("#select").css("display", "none");
			$("#ring").css("display", "inherit");
			$("#ring").css("margin-top", "10%");
			//$("#ring div").css("margin-left", "10%");
			$("#player2").append(id).attr("type", "opp");

			//$("#attack").show();
		
		});

	}
	function startFight() {
		fight(player1, player2);
		
	}
	startFight();

	//attack button
	function fight() {
		$("#attack").click(function() {	
			//alert("hit");
			player1.health = player1.health - player1.enemyAttackBack;
			player2.health = player2.health - player1.attack;
			$("#player1 #health").html("Health:" + player1.health);
			$("#player2 #health").html("Health:" + player2.health);
				var win = (player1.health > 1 && player2.health < 1);
				var lose = (player1.health < 1);
				var prevEnemy = player2;
				var selectedChar = player1

				if (win) {
					alert("you won");
			
			$("#select").css("display","inherit")
			$("#ring").css("display","none");		
			$("#select h1").html("Choose Your Opponent");
			$("#select div").css("margin-left", "10%");
			function opponentSelect(id, name, object, bool) {
		id.click(function() {
			player3 = object;
			selectedOpponent = name;
			object.enemySel = bool;
			$("#player2").replace(id);
			$("#select").css("display", "none");
			$("#ring").css("display", "inherit");
			$("#ring").css("margin-top", "10%");
			//$("#ring div").css("margin-left", "10%");
			$("#player3").prepend(id);
			$("#player3").css("display", "inherit");

			//$("#player1").append(selectedChar);
			//$("#ring").css("visibility","hidden");
			
			opponentSelect($big, "enemy big", characters[0], true);
			opponentSelect($pac, "enemy pac", characters[1], true);
			opponentSelect($eminem, "enemy eminem", characters[2], true);
			opponentSelect($method, "enemy method", characters[3], true);

		})
				
			}
				
		}

		})
	}
});


	


   
