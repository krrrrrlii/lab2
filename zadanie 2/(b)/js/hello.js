function findPrimes() {
    var number = parseInt(document.getElementById("number").value);
    var primes = [];

    for (var i = 2; i <= number; i++) {
        primes[i] = true;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (primes[i]) {
            for (var j = i * i; j <= number; j += i) {
                primes[j] = false;
            }
        }
    }
    var result = "";
    for (var i = 2; i <= number; i++) {
        if (primes[i]) {
            result += i + " ";
        }
    }

    document.getElementById("result").textContent = "Простые числа: " + result;
}
