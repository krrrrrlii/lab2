function checkBadminton(weather, temperature, wind, humidity) {
    if (temperature === "жарко") {
        return "Нет";
    } else if (temperature === "тепло" && wind === "нет" && (weather === "ясно" || weather === "облачно")) {
        return "Да";
    } else if (temperature === "холодно" && wind === "нет" && humidity === "низкая") {
        return "Да";
    } else {
        return "Нет";
    }
}

function checkButtonClicked() {
    var weather = document.getElementById("weather").value;
    var temperature = document.getElementById("temperature").value;
    var wind = document.getElementById("wind").value;
    var humidity = document.getElementById("humidity").value;

    var result = checkBadminton(weather, temperature, wind, humidity);

    document.getElementById("result").textContent = result;
}
