const { response } = require("express");

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login')
  const password = document.querySelector('#password-login')

  if(username && password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'}
    })

    return(response.ok) ?
      document.location.replace('/dashboard'):
        alert(response.statusText)
    
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('#name-signup')
  const email = document.querySelector('#email-signup')
  const password = document.querySelector('#password-signup')

  if(username && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({username, email, password}),
      headers: {'Content-Type':'application/json'}
    })

    return(response.ok) ?
      document.location.replace('/dashboard'):
        alert(response.statusText)
    
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler)

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler)


