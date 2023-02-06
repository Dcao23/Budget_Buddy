const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
<<<<<<< HEAD
      document.location.replace("/");
=======
      document.location.href = "/assets";
>>>>>>> c0cc583c5dac1fe03a766f2879854934eead7a45
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
<<<<<<< HEAD

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
=======
  console.log("clicked");
  const username = document.querySelector("#nameSection").value.trim();
  const email = document.querySelector("#emailSection").value.trim();
  const password = document.querySelector("#passwordSection").value.trim();
>>>>>>> c0cc583c5dac1fe03a766f2879854934eead7a45

  if (username && email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
<<<<<<< HEAD
      body: JSON.stringify({ username, email, password }),
=======
      body: JSON.stringify({ name: username, email, password }),
>>>>>>> c0cc583c5dac1fe03a766f2879854934eead7a45
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
<<<<<<< HEAD
      document.location.replace("/");
=======
      document.location.href = "/assets";
>>>>>>> c0cc583c5dac1fe03a766f2879854934eead7a45
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
