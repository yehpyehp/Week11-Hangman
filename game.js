var Letters = require('./letter.js'); 

var Game = function(category) { 
  this.category = category; 
  this.listAnimal = ['lizard', 'dolphin', 'elephant', 'tiger', 'hippopotamus', 'rhinoceros', 'buffalo', 'cougar'];
  this.listMovie = ['godfather', 'candyman', 'her', 'rainman', 'armageddon', 'insidious', 'inception'];
  this.listCar = ['mustang', 'corvette', 'hummer', 'lamborghini', 'maserati', 'viper', 'porsche'];
  this.gameOn = function() { 
    switch(this.category) {
      case "Animals": 
        console.log("Guess the animal name!");
        title(); 
        
        this.wordToGuess = this.listAnimal[Math.floor(Math.random()*this.listAnimal.length)];
       
        var sendWord = new Letters(this.wordToGuess);
        
        sendWord.setDisplay();
        break; 
      case "Movies": 
        console.log("Guess the movie name!");
        title(); 
        
        this.wordToGuess = this.listMovie[Math.floor(Math.random()*this.listMovie.length)];
        
        var sendWord = new Letters(this.wordToGuess);
      
        sendWord.setDisplay();
        break; 
      case "Cars":
        console.log("Guess the car name!"); 
        title(); 
        this.wordToGuess = this.listCar[Math.floor(Math.random()*this.listCar.length)];
       
        var sendWord = new Letters(this.wordToGuess);
       
        sendWord.setDisplay();
        break; 
      default:
        
        console.log("Something is broken :(");      
    }
  }
}

function title() { //Logs Hangman ascii art to the console

  console.log("");
      console.log('Play Hangman!');

}

//Makes Game constructor accessible to other files
module.exports = Game;