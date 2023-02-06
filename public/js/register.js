const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#nameSection").value.trim();
    const email = document.querySelector("#emailSection").value.trim();
    const password = document.querySelector("#passwordSection").value.trim();
    console.log(name, email, password)
    if (name && email && password) {
        const response = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/home");
        } else {
            alert("Failed to sign up.");
        }
    }
};

document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);