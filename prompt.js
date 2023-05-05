const loginForm = document.querySelector("form")

function confirmLogin(event) {
  console.log("confirmlogin")
  event.preventDefault()


  let text = "Does everything look correct?";

  if (confirm(text) == true) {
    document.getElementById("FormSubmit").submit(); window.location.href = "index.html";
  }
  else {
    window.location.href = "contact.html";
  }
}

loginForm.addEventListener("submit", confirmLogin);
