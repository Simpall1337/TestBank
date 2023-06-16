var input = document.getElementById('myInput');
var button = document.getElementById('myButton');

button.addEventListener('click', function() {
  var text = input.value;
  var number = parseInt(text);
  var balance = sessionStorage.getItem('2');
  if(number > balance){
    alert("You don't have money!");
  }
  else{
    alert("Take your money!");
    setTimeout(function() {
      window.location.href = "end.html";
    }, 5000);
  }
  input.value = ''; 
});