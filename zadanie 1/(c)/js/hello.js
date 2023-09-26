function checkBadminton() {
    var daySelect = document.getElementById("daySelect");
    var weatherSelect = document.getElementById("weatherSelect");
    var temperatureSelect = document.getElementById("temperatureSelect");
    var precipitationSelect = document.getElementById("precipitationSelect");
    var windSelect = document.getElementById("windSelect");
    var humiditySelect = document.getElementById("humiditySelect");
  
    var day = daySelect.value;
    var weather = weatherSelect.value;
    var temperature = temperatureSelect.value;
    var precipitation = precipitationSelect.value;
    var wind = windSelect.value;
    var humidity = humiditySelect.value;
  
    if (day == "Sunday" && weather == "Sunny" && temperature == "Warm" && precipitation == "Clear" && wind == "No" && humidity == "Low") {
      document.getElementById("result").innerHTML = "Yes, let's play badminton!";
    } else {
      document.getElementById("result").innerHTML = "No, let's not play badminton!";
    }
  }
