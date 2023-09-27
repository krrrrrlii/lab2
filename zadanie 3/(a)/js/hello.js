
 function countMaxNumbers(arr) {
 
    var max = Math.max(...arr);
    

    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == max) {
            count++;
        }
    }
    
    return count;
}

var userInput = prompt("Введите числа через запятую");


var numbers = userInput.split(",").map(Number);


var count = countMaxNumbers(numbers);


var resultText = "Количество чисел, равных максимальному: " + count;
var resultElement = document.getElementById("result");
resultElement.textContent = resultText;
