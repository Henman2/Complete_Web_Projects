//collection dice images from 1 to 6
var diceCollection = ["images/dice1.png",
                      "images/dice2.png",
                      "images/dice3.png",
                      "images/dice4.png",
                      "images/dice5.png",
                      "images/dice6.png"];

// var numberOfDice = diceCollection.length;
// Get random dices
var playerOneDice = Math.floor(6*Math.random());
var playerTwoDice = Math.floor(6*Math.random());

// Assign the dices to the img tag
document.querySelector(".img1").src = diceCollection[playerOneDice];

document.querySelector(".img2").src = diceCollection[playerTwoDice];

//Check for the winner
if(playerOneDice === playerTwoDice){
  document.querySelector("h1").innerHTML = "It is a draw"
}
else if(playerOneDice > playerTwoDice){
  document.querySelector("h1").innerHTML = "🚩Player One Wins!"
}
else{
  document.querySelector("h1").innerHTML = "Player Two Wins!🚩";
}

// console.log(playerOneDice);
// console.log(playerTwoDice);



/*   Alternative Solution:

//Get random numbers between 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//attach the random numbers to image names to get random images files
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

//Set the image file sources
var randomImageSource = "images/" + randomDiceImage;
var randomImageSource2 = "images/"++ randomDiceImage2";

//select first of the img tag and set new attribute src
var image1 = document.querySelectorAll("img")[0]; //select the first img tag in the document
image1.setAttribute("src", randomImageSource);

//select nxt or seconf of the img tag and set new attribute src
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomrandomImageSource2);


//check which player win or if it is a draw
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}



*/
