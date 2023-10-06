function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error('Error:', error));
  }
  