
$(document).ready(function () {
//global variables
    var gem1 = 0;
    var gem2 = 0;
    var gem3 = 0;
    var gem4 = 0;
    var currentScore = 0;
    var goalScore = 0;
    var wins = 0;
    var losses = 0;

//function used everything the page loads, user wins, or user loses
    var startGame = function () {
        goalScore = Math.floor((Math.random()*50)+19);
        $("#pointsGoal").html(goalScore);
        currentScore = 0;
        $("#currentPoints").html(currentScore);
        gem1 = Math.floor((Math.random()*12)+1);
        console.log("gem1: " + gem1)
        gem2 = Math.floor((Math.random()*12)+1);
        console.log("gem2: " + gem2)
        gem3 = Math.floor((Math.random()*12)+1);
        console.log("gem3: " + gem3)
        gem4 = Math.floor((Math.random()*12)+1);
        console.log("gem4: " + gem4)
    }



    startGame() 

    //click functions for each gem including if/else statement to determine when/if the user wins or loses
    $("#gem1").on("click", function(){
        currentScore += gem1;
        $("#currentPoints").text(currentScore);
        if (currentScore === goalScore) {
            wins = wins += 1;
            $("#wins").text(wins);
            $("#winMessage").text("you are #ProspectorGoals!!!!");
            startGame();
        } else if (currentScore > goalScore) {
            losses = losses += 1;
            $("#losses").text(losses);
            $("#winMessage").text("you are a not #ProspectorGoals");
            startGame();
        } 
    });
    $("#gem2").on("click", function(){
        currentScore += gem2;
        $("#currentPoints").text(currentScore);
        if (currentScore === goalScore) {
            wins = wins += 1;
            $("#wins").text(wins);
            $("#winMessage").text("you are #ProspectorGoals!!!!");
            startGame();
        } else if (currentScore > goalScore) {
            losses = losses += 1;
            $("#losses").text(losses);
            $("#winMessage").text("you are a not #ProspectorGoals");
            startGame();
        } 
    });
    $("#gem3").on("click", function(){
        currentScore += gem3;
        $("#currentPoints").text(currentScore);
        if (currentScore === goalScore) {
            wins = wins += 1;
            $("#wins").text(wins);
            $("#winMessage").text("you are #ProspectorGoals!!!!");
            startGame();
        } else if (currentScore > goalScore) {
            losses = losses += 1;
            $("#losses").text(losses);
            $("#winMessage").text("you are a not #ProspectorGoals");
            startGame();
        } 
    });
    $("#gem4").on("click", function(){
        currentScore += gem4;
        $("#currentPoints").text(currentScore);
        if (currentScore === goalScore) {
            wins = wins += 1;
            $("#wins").text(wins);
            $("#winMessage").text("you are #ProspectorGoals!!!!");
            startGame();
        } else if (currentScore > goalScore) {
            losses = losses += 1;
            $("#losses").text(losses);
            $("#winMessage").text("you are a not #ProspectorGoals");
            startGame();
        } 
    })












});


