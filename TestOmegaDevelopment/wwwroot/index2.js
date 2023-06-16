document.addEventListener("DOMContentLoaded", function() {
    var balanceButton = document.getElementById("balanceButton");
    var cashButton = document.getElementById("cashButton");
  
    balanceButton.addEventListener("click", function() {
        window.location.href = "pin.html";
    });
  
    cashButton.addEventListener("click", function() {
        window.location.href = "pinCash.html";
    });
  });