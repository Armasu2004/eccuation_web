function calculate() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
  
    var delta = b * b - 4 * a * c;
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      document.getElementById("result").innerHTML = "Introduceți numere valide în câmpurile de intrare.";
    } else if (a === 0) {
      document.getElementById("result").innerHTML = "A nu poate fi zero.";
    } else if (delta < 0) {
      document.getElementById("result").innerHTML = "Ecuatia nu are solutii reale.";
    } else {
      var x1 = (-b + Math.sqrt(delta)) / (2 * a);
      var x2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.getElementById("result").innerHTML = "x1 = " + x1 + "<br>x2 = " + x2;
    }
  }
  
  var calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", calculate);
  