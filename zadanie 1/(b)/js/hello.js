function getDaysInMonth(month) {
    var year = new Date().getFullYear(); // получаем текущий год
    var daysInMonth = 0;
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        daysInMonth = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        daysInMonth = 30;
        break;
      case 2:
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
          daysInMonth = 29; // високосный год
        } else {
          daysInMonth = 28;
        }
        break;
    }
    return daysInMonth;
  }

  function calculateDays() {
    var month = parseInt(document.getElementById("month").value);
    var result = getDaysInMonth(month);
    document.getElementById("result").textContent =
      "Количество дней: " + result;
  }
