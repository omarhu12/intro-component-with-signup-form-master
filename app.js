const form = document.getElementById("form");
const username = document.getElementById("firstname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const lastName = document.getElementById("lastName");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const lastNameValue = lastName.value.trim();

  if (usernameValue === "") {
    setErrorFor(username);
  } else if (usernameValue !== "") {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email);
  } else if (emailValue !== "") {
    setSuccessFor(email);
  }

  // else if (!isEmail(emailValue)) {
  //   setErrorFor(email);
  // }

  if (passwordValue === "") {
    setErrorFor(password);
  } else if (passwordValue !== "") {
    setSuccessFor(password);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName);
  } else if (lastNameValue !== "") {
    setSuccessFor(lastName);
  }
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  let formRemove = input.parentElement;
  formRemove.className = "form-control";
}

// function isEmail(email) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );
// }
