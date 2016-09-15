var Mains = require('./main.js'); 

var Checker = function(wordToGuess, that) {
  this.wordToGuess = wordToGuess; 
  this.that = that; 
  this.checkLetter = function(guessLetter) { 
    var wrongGuess = 1; 
    for(var i = 0; i < this.wordToGuess.length; i++) {    
      if(this.wordToGuess.charAt(i) == guessLetter) { 
        wrongGuess = 0; 
        Mains.correctGuesses++;    
      }
    }
    if(wrongGuess == 0) {    
      if(Mains.correctGuesses == this.wordToGuess.length) { 
        
        
        console.log("");
        console.log("                       You Win!                          ");
        console.log("You guessed the word " + this.wordToGuess);
        
      } else {
        
        
        console.log("");
        console.log("                       Correct!                          ");
        console.log("Guesses Remaining: " + Mains.guessesRemaining);
        
        this.that.resetDisplay(guessLetter); 
      }
    }else if(wrongGuess == 1) { 
      Mains.badGuesses++; 
      if(Mains.guessesRemaining > 1) { 
        Mains.guessesRemaining--; 
        
        
        console.log("");
        console.log("                         Wrong!                          ");
        console.log("Guesses Remaining: " + Mains.guessesRemaining);
        
        this.that.resetDisplay(guessLetter); 
      } else {
        
        
        console.log("");
        console.log("                       You Lose!                          ");
        console.log("The word was " + this.wordToGuess);
        
      }
    }
  }

}


module.exports = Checker;