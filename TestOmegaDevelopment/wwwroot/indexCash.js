var buttons = document.querySelectorAll('.number-button');
var buttons2 = document.querySelectorAll('.other-button');

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
    sessionStorage.setItem('2', data.balance);
  })
  var balance = sessionStorage.getItem('2');
 
  buttons.forEach(function(button) {
  button.addEventListener('click', function() {
   
    var number = parseInt(button.textContent);
    
    if(number < balance){
        alert("Please, take your money!");
        setTimeout(function() {
          window.location.href = "end.html";
          }, 5000);
    }
    else{
        alert("You don't have money!");
    }
  });
});
buttons2.forEach(function(button) {
    button.addEventListener('click', function() {
      if(button.textContent == "Other amount"){
            window.location.href = "otherAmout.html";
      }
      if(button.textContent == "Back"){
        window.location.href = "main2.html";
      }
      
    });
  });

