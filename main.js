
var Words = require('./word.js'); 
var Letters = require('./letter.js'); 
var Games = require('./game.js'); 
var inquirer = require('inquirer'); 
var correctGuesses = 0; 
var badGuesses = 0; 
var guessesRemaining = 10; 
var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

inquirer.prompt([ 

  {
    type: "list", 
    name: "start", 
    message: "Are you ready to play hangman?", 
    choices: ["Yes", "No"] 
  }

]).then(function(answers){ 

  if(answers.start == "Yes"){ 
    
    inquirer.prompt([ 

      {
        type: "list", 
        name: "category", 
        message: "Select a category.", 
        choices: ["Animals", "Movies", "Cars"] 
      }

    ]).then(function(answers){ 

      var goNow = new Games(answers.category); 
      goNow.gameOn(); 

    })

  }else if (answers.start == "No") {
    
    console.log("=========================================================");
    console.log("");
    console.log("What! How can you not want to play?");
    console.log("");
    console.log("=========================================================");

  }

})


var gamePlay = function(that){ 

    inquirer.prompt([ 

      {
        type: "input", 
        name: "guess", 
        message: "Guess a letter!" 
      }

    ]).then(function(answers) { 

      var valid; 
      var letter = answers.guess.toLowerCase(); 
      for(i = 0; i < options.length; i++){ 
        if(letter == options[i]){ 
          valid = 1;   
        }
      }
      if(valid == 1){ 
        that.setGuess(letter);  
      }
      else{ //If input is invalid
          console.log("Only letters!");
          gamePlay(that); 
      }
    })

}

//Make variables accessible to other files
exports.gamePlay = gamePlay;
exports.correctGuesses = correctGuesses;
exports.badGuesses = badGuesses;
exports.guessesRemaining = guessesRemaining;