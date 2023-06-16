document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    

    const axios = require('axios');

    async function makeRequest() {
    
        const config = {
            method: 'get',
            url: 'http://localhost:7005/api/UserLoginingcs/login'
        }
        let res = await axios(config)
    
        console.log(res.status);
    }
    
    makeRequest();


    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Perform login validation logic
    if (username === 'admin' && password === 'password') {
      showMessage('Login successful!', 'green');
    } else {
      showMessage('Invalid username or password!', 'red');
      
    }
    
    // Clear form inputs
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  });
  
  function showMessage(message, color) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
  }