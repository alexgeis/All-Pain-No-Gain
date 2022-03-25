// const { response } = require("express");

async function loginFormHandler(event) {
  event.preventDefault();
  console.log(event);
  const email = document.querySelector("#email-login");
  const password = document.querySelector("#password-login");

  if (email && password) {
    const res = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
      headers: { "Content-Type": "application/json" },
    });

    return res.ok
      ? document.location.replace("/dashboard")
      : alert(res.statusText);
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#name-signup").value;
  const email = document.querySelector("#email-signup").value;
  const password = document.querySelector("#password-signup").value;
  console.log(username, email, password);
  if (username && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        email,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to login");
    }
    // return response.ok
    //   ? document.location.replace("/dashboard")
    //   : alert(response.statusText);
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
