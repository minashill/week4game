$(document).ready(function () {
	window.onload = function() {
		audioElement.play();
	};
	var audioElement = document.createElement("audio");
	audioElement.setAttribute("src", "assets/audio/w2.mp3");
	audioElement.loop = true;
	characters = [
	{
		name: 'big',
		health: 150,
		attack: 60,
		imageUrl: "assets/images/big.jpg",
		enemyAttackBack: 15,
		selected: false,
		enemySel: false
	},
	{
		name: 'pac',
		health: 140,
		attack: 90,
		imageUrl: "assets/images/pac.jpg",
		enemyAttackBack: 20,
		selected: false,
		enemySel: false
	},
	{
		name: 'eminem',
		health: 165,
		attack: 30,
		imageUrl: "assets/images/eminem.jpg",
		enemyAttackBack: 100,
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
    //start
    function startGame() {
    	selectChar($big, "big", characters[0], true);
    	selectChar($pac, "pac", characters[1], true);
    	selectChar($eminem, "eminem", characters[2], true);
    	selectChar($method, "method", characters[3], true);
        //
    }
    startGame();
    //select character
    function selectChar(id, name, object, bool) {
    	id.click(function () {
    		if (!selectedChar) {
    			player1 = object;
    			if (selectedChar === undefined) {
    				selectedChar = name;
    				object.selected = bool;
    			}

    			//
    			$("#select h1").html("Choose Your Opponent");
    			$("#select div").css("margin-left", "10%");
    			$("#player1").append(id);
    			//adds audio unique to id
    			if (id === $big){
    				var audio = new Audio('assets/audio/biggie_1.mp3');
    				audio.play();}
    				if 	(id === $pac){
    					var audio = new Audio('assets/audio/2pac2.mp3');
    					audio.play();}
    					if (id === $eminem){
    						var audio = new Audio('assets/audio/eminem_4.mp3');
    						audio.play();}
    						if (id === $method){
    							var audio = new Audio('assets/audio/methodman_tical.mp3');
    							audio.play();}
                //$("#ring").css("visibility","hidden");

                opponentSelect($big, "enemy big", characters[0], true);
                opponentSelect($pac, "enemy pac", characters[1], true);
                opponentSelect($eminem, "enemy eminem", characters[2], true);
                opponentSelect($method, "enemy method", characters[3], true);
            }
        });
    }
    //choose opp
    function opponentSelect(id, name, object, bool) {
    	id.click(function () {
    		player2 = object;
    		selectedOpponent = name;
    		object.enemySel = bool;
    		$("#select").css("display", "none");
    		$("#ring").css("display", "inherit");
    		$("#ring").css("margin-top", "10%");
            //$("#ring div").css("margin-left", "10%");
            $("#player2").append(id).attr("type", "opp");
            if (id === $big){
            	var audio = new Audio('assets/audio/biggie_1.mp3');
            	audio.play();}
            	if 	(id === $pac){
            		var audio = new Audio('assets/audio/2pac2.mp3');
            		audio.play();}
            		if (id === $eminem){
            			var audio = new Audio('assets/audio/eminem_4.mp3');
            			audio.play();}
            			if (id === $method){
            				var audio = new Audio('assets/audio/methodman_tical.mp3');
            				audio.play();}


            			});

    }
    function startFight() {
    	fight();

    }
    startFight();


    function nextRound() {
    	$("#ring").css("display", "none");
    	$("#select").css("display", "inherit");
    	$("#select h1").html("Choose Your Next Opponent");
    	$("#ring div").last().remove();		
    	opponentSelect($big, "enemy big", characters[0], true);
    	opponentSelect($pac, "enemy pac", characters[1], true);
    	opponentSelect($eminem, "enemy eminem", characters[2], true);
    	opponentSelect($method, "enemy method", characters[3], true);
    }
    //attack button
    function fight() {
    	$("#attack").click(function () {
    		var audio = new Audio('assets/audio/punch.mp3');
    		audio.play();
            //alert("hit");
            player1.health = player1.health - player1.enemyAttackBack;
            player2.health = player2.health - player1.attack;
            $("#player1 #health").html("Health:" + player1.health);
            $("#player2 #health").html("Health:" + player2.health);
            var win = (player1.health > 1 && player2.health < 1);
            var lose = (player1.health < 1);
            var prevEnemy = player2;
            //kill count and win condition
            if (win) {
            	killCount++;

            	$("#player2").empty();
                //location.reload();
                nextRound();
                wingame();
                function wingame() {
                	if (killCount > 2) {
                		//alert("Your the best");
                		var audio = new Audio('assets/audio/clap.mp3');
                		audio.play();
                		var audio = new Audio('assets/audio/youwin.mp3');
                		audio.play();
                		$("#select h1").html("CONGRATS YOU'RE THE KING OF THE STREET!");
                		//$("#select").append("<img src ='assets/images/plat.png'>");
                		setTimeout(function() {
                			location.reload();
                		}, 5000);
                		
                	}
                }

            }
            else if (lose) {
            	alert("Game Over!");
            	$("#select h1").html("YOU SUCK BRO");
            	var audio = new Audio('assets/audio/boo.mp3');
            	audio.play();
            	var audio = new Audio('assets/audio/youlose.mp3');
            	audio.play();
            	setTimeout(function() {
            	location.reload();
            	}, 5000);
            }

        })

    }
});