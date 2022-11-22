
//1. click evrnt handler
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//pass a function as input so that it can be called only when the click event happen
for(let i= 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var clickedBtn = this.innerHTML; //get the inner content of the buttom pressed

    //call makesound function this time input in the button that was clicked
    makeSound(clickedBtn);
    //
    buttonAnimation(clickedBtn); //call animation function
      console.log("Button pressed "+clickedBtn);  //check for buttom that was clicked
  });
}


//2. keyboard event handler
document.addEventListener('keydown', function(e){
  //call make sound function assign event key as parameter
  makeSound(e.key);
  console.log("key pressed from keyboard "+e.key); //check key that was pressed
//called animation function call
buttonAnimation(e.key);
});


//function to detect key and buttom keypress and play sound
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

// Add some animation effect
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
