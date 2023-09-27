  var input = prompt("Введите числа через запятую: ");        
  var numbers = input.split(",").map(Number);
  
  numbers.sort(function(a, b){return a - b});
  
  var median;
  if (numbers.length % 2 === 0) {
      median = (numbers[numbers.length/2] + numbers[numbers.length/2 - 1]) / 2;
  } else {
      median = numbers[Math.floor(numbers.length/2)];
  }

  var resultElement = document.getElementById("result");
  resultElement.textContent = "Медиана: " + median;
