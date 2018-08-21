
//user clicks a gem
    //current score increments by gem value
    //keep clicking until current score equals or exceeds goal score
//if current score = goal score, user wins
    //add 1 to win score 
    //restart game
//if current score > goal score, user loses
    //add 1 to loss score
    //restart game


//when game "starts" 
    //goal score is random amount 19-50
    //goal score prints to text on page
    //current score = 0
    //each gem is worth a random amount 1-12



$(document).ready(function () {
    var gem1 = 0;
    var gem2 = 0;
    var gem3 = 0;
    var gem4 = 0;
    var currentScore = 0;
    var goalScore = 0;
    var wins = 0;
    var losses = 0;


    var startGame = function () {
        goalScore = Math.floor((Math.random()*50)+19);
        $("#pointsGoal").html(goalScore);
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
    //do i want the clicks inside my if block
    if (currentScore < goalScore) {
    $("#gem1").on("click", function(){
        currentScore += gem1;
        $("#currentPoints").text(currentScore);
    });
    $("#gem2").on("click", function(){
        currentScore += gem2;
        $("#currentPoints").text(currentScore);
    });
    $("#gem3").on("click", function(){
        currentScore += gem3;
        $("#currentPoints").text(currentScore);
    });
    $("#gem4").on("click", function(){
        currentScore += gem4;
        $("#currentPoints").text(currentScore);
    })
    //should i use === or =
    } else if (currentScore = goalScore) {
        wins = wins += 1;
        $("#wins").text(wins);
        $("#winMessage").text("you are a master of gems!");
        startGame()
    } else {
        losses = losses += 1;
        $("#losses").text(losses);
        startGame()
    }











});


