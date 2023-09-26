function calculateSquareRoot() {
    var numberInput = document.getElementById("numberInput");
    var resultText = document.getElementById("resultText");
  
    var number = parseFloat(numberInput.value);
    var guess = number / 2;
    var prevGuess;
  
    while (Math.abs(guess - prevGuess) > 0.00001) {
      prevGuess = guess;
      guess = (guess + number / guess) / 2;
    }
  
    resultText.innerText = "Квадратный корень " + number + " равен " + guess.toFixed(5);
  }
