const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "homeskillet", "glizzy", "nick", "nathen", "curlee" && password ===  "5509", "man", "val", "nathen", "toes") {
      
        alert("You have successfully logged in.");
        window.location.replace("https://a0-sdfmmelfksmfk3wsk34tmmfkd34-dfkfwmnad.ga");
    } else {
        loginErrorMsg.style.opacity = 1;
    } 
})