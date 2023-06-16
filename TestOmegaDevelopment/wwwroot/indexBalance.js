document.addEventListener("DOMContentLoaded", function() {
    var balanceElement = document.getElementById("balanceAmount");
    var button = document.getElementById("myButton");
    var username = sessionStorage.getItem('1');
    
    fetch('/balance/balance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({Userlogin: username})
      })
      .then(response => response.json())
      .then(data => {
        balanceElement.textContent = data.balance + " UAH" ;
      })
      
    button.addEventListener("click", function() {
      
        window.location.href = "main2.html";
    });
  });

  