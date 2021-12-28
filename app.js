const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginText = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(information) {
  information.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreethings(username);
}

function paintGreethings(username) {
  loginText.innerHTML = `Hello ${username}`;
  loginText.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  paintGreethings(savedUsername);
}
