function calculate() {
    var age = document.getElementById("ageInput").value;
    var result = "";
  
    if (age % 100 >= 11 && age % 100 <= 14) {
      result = age + " лет";
    } else if (age % 10 === 1) {
      result = age + " год";
    } else if (age % 10 >= 2 && age % 10 <= 4) {
      result = age + " года";
    } else {
      result = age + " лет";
    }
  
    document.getElementById("result").innerHTML = result;
  }
