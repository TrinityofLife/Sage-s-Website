const form = document.querySelector("form");
const body = document.querySelector("body");

const onSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  body.innerHTML = "";

  for (const value of formData.values()) {
    body.append(value + " ")
  }
}

form.addEventListener("submit", onSubmit);