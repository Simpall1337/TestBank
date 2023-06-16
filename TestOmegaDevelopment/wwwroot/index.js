document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    sessionStorage.setItem('1', username);
    
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    
    fetch('/login/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({Userlogin: username, Pin: password})
    }).then(response => {
      if (response.ok) {

        showMessage('Login successful!', 'green');
        setTimeout(function() {
          window.location.href = "main2.html";
        }, 0);
      } else {
        showMessage('Invalid username or password!', 'red');
      }
    })
    .then(response => response.json())
  });
  
  function showMessage(message, color) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
  }

