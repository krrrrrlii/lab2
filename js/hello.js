function calculateAge() {
    var age = parseInt(document.getElementById("ageInput").value);
    var result = age + " ";

    if (age === 1 || age % 10 === 1) {
        result += "год";
    } else if ((age >= 2 && age <= 4) || (age % 10 >= 2 && age % 10 <= 4)) {
        result += "года";
    } else {
        result += "лет";
    }

    document.getElementById("resultText").textContent = result;
}
