const logout = async function () {
  console.log("LOGOUT FUNCTION INVOKED");
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  //if response is good, replace with "/" page
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
