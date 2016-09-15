var Mains = require('./main.js'); 
var Words = require('./word.js'); 


var Display = function(word) {
  this.word = word; 
  this.wordShow = ''; 
  this.guess = []; 
  this.setDisplay = function() { 
    this.placeholders = ''; 
    
    for(var i = 0; i < this.word.length; i++) { 
      this.placeholders += '_';
    }
    this.wordShow = this.placeholders; 
    console.log(this.wordShow.split('').join(' ')); 
    Mains.gamePlay(this); 
  }
  this.resetDisplay = function(letter) { 
    var underscores = this.wordShow;  
    underscores = underscores.split(''); 
    
    for(var i = 0; i < this.word.length; i++){  
      if(this.word.charAt(i) == letter){
        underscores[i] = letter; 
        this.wordShow = underscores.join(''); 
      }
    }
    
    console.log(this.wordShow.split('').join(' ')); 
    Mains.gamePlay(this); 
  }
  this.setGuess = function(letter) { 
    var guessed = 0; 
    for(i = 0; i < this.guess.length; i++) { 
      if(letter == this.guess[i]) { 
        guessed = 1;
        console.log("You already guessed that letter.");
        Mains.gamePlay(this); 
      }
    }
    if(guessed == 0) { 
      this.guess.push(letter); 
      var check = new Words(this.word, this); 
      check.checkLetter(letter); 
    }
  }
}

module.exports = Display;