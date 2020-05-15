/**
 * Set the form control element to valid
 * @param {object} element - The DOM element
 */
function setValid(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}

/**
 * Set the form control element to invalid with the error message
 * @param {object} element - The DOM element
 */
function setInvalid(element) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
}

/**
 * Remove validation information from the element
 * @param {object} element - The DOM element
 */
function removeValidation(element) {
    element.classList.remove('is-valid');
    element.classList.remove('is-invalid');
}

/**
 * Validate the login form and try to log the user in
 * @param {object} event - The DOM event
 */
function login(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;
    var ul = document.getElementById("login-error-list");
    var child = ul.lastElementChild;
       while (child) {
           ul.removeChild(child);
           child = ul.lastElementChild;
       }
    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
        var feedback = document.getElementById("login-email-feedback");
        feedback.innerHTML = "Please enter the email";
        var ul = document.getElementById("login-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Please enter the email"));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#login-email-control");
        li.appendChild(a);
        ul.appendChild(li);
    } else {
        setInvalid(email);
        hasError = true;
        var feedback = document.getElementById("login-email-feedback");
        feedback.innerHTML = "The email is not registered.";
        var ul = document.getElementById("login-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("The email is not registered. Click to go to the registration form."));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#register-form");
        li.appendChild(a);
        ul.appendChild(li);
    }

    var password = document.getElementById('login-password-control');
    if (password.value.trim().length == 0) {
        setInvalid(password);
        hasError = true;
        var feedback = document.getElementById("login-password-feedback");
        feedback.innerHTML = "Please enter the password";
        var ul = document.getElementById("login-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Please enter the password"));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#login-password-control");
        li.appendChild(a);
        ul.appendChild(li);
    } else {
        setValid(password);
    }

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to retrieve the password
 * @param {object} event - The DOM event
 */
function forgot(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;
    var ul = document.getElementById("login-error-list");
    var child = ul.lastElementChild;
       while (child) {
           ul.removeChild(child);
           child = ul.lastElementChild;
       }
    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
        var feedback = document.getElementById("login-email-feedback");
        feedback.innerHTML = "Please enter the email";
        var ul = document.getElementById("login-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Please enter the email"));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#login-email-control");
        li.appendChild(a);
        ul.appendChild(li);
    } else {
        setInvalid(email);
        hasError = true;
        var feedback = document.getElementById("login-email-feedback");
        feedback.innerHTML = "The email is not registered";
        var ul = document.getElementById("login-error-list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Please enter the email"));
        ul.appendChild(li);
    }

    var password = document.getElementById('login-password-control');
    removeValidation(password);

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to register the new user
 * @param {object} event - The DOM event
 */
function register(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;
    var ul = document.getElementById("register-error-list");
    var child = ul.lastElementChild;
       while (child) {
           ul.removeChild(child);
           child = ul.lastElementChild;
       }
    var firstName = document.getElementById('register-first-name-control');
    if (firstName.value.trim().length == 0) {
        setInvalid(firstName);
        hasError = true;
        var feedback = document.getElementById("register-first-feedback");
        feedback.innerHTML = "Please enter the first name";
        var ul = document.getElementById("register-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Please enter the first name"));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#register-first-name-control");
        li.appendChild(a);
        ul.appendChild(li);
    } else if (firstName.validity.valid) {
        setValid(firstName);
    }

    var lastName = document.getElementById('register-last-name-control');
    if (lastName.value.trim().length == 0) {
        setInvalid(lastName);
        hasError = true;
        var feedback = document.getElementById("register-last-feedback");
        feedback.innerHTML = "Please enter the last name";
        var ul = document.getElementById("register-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Please enter the last name"));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#register-last-name-control");
        li.appendChild(a);
        ul.appendChild(li);
    } else if (lastName.validity.valid) {
        setValid(lastName);
    }

    var email = document.getElementById('register-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
        var feedback = document.getElementById("register-email-feedback");
        feedback.innerHTML = "Please enter the email";
        var ul = document.getElementById("register-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Please enter the email"));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#register-email-control");
        li.appendChild(a);
        ul.appendChild(li);
    } else {
        setInvalid(email);
        hasError = true;
        var feedback = document.getElementById("register-email-feedback");
        feedback.innerHTML = "Please enter the correct email";
        var ul = document.getElementById("register-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Please enter the correct email"));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#register-email-control");
        li.appendChild(a);
        ul.appendChild(li);
    }

    var password = document.getElementById('register-password-control');
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
        setInvalid(password);
        hasError = true;
        var feedback = document.getElementById("register-password-feedback");
        feedback.innerHTML = "Your password is too short";
        var ul = document.getElementById("register-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Your password is too short"));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#register-password-control");
        li.appendChild(a);
        ul.appendChild(li);
    } else if (passwordValue.length > 16) {
        setInvalid(password);
        hasError = true;
        var feedback = document.getElementById("register-password-feedback");
        feedback.innerHTML = "Your password is too long";
        var ul = document.getElementById("register-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Your password is too long"));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#register-password-control");
        li.appendChild(a);
        ul.appendChild(li);
    } else if (passwordValue.match(/[a-zA-Z]+/) == null) {
        setInvalid(password);
        hasError = true;
        var feedback = document.getElementById("register-password-feedback");
        feedback.innerHTML = "Your password does not have letters";
        var ul = document.getElementById("register-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Your password does not have letters"));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#register-password-control");
        li.appendChild(a);
        ul.appendChild(li);
    } else if (passwordValue.match(/[0-9]+/) == null) {
        setInvalid(password);
        hasError = true;
        var feedback = document.getElementById("register-password-feedback");
        feedback.innerHTML = "Your password does not have numbers";
        var ul = document.getElementById("register-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Your password does not have numbers"));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#register-password-control");
        li.appendChild(a);
        ul.appendChild(li);
    } else {
        setValid(password);
    }

    var programme = document.getElementById('register-programme-control');
    if (programme.validity.valueMissing) {
        setInvalid(programme);
        hasError = true;
        var feedback = document.getElementById("register-programme-feedback");
        feedback.innerHTML = "Please choose the program";
        var ul = document.getElementById("register-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Please choose the program"));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#register-programme-control");
        li.appendChild(a);
        ul.appendChild(li);
    } else if (!programme.validity.valid) {
        setInvalid(programme);
        hasError = true;
        var feedback = document.getElementById("register-programme-feedback");
        feedback.innerHTML = "Please choose the existing program";
        var ul = document.getElementById("register-error-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode("Please choose the existing program"));
        a.setAttribute("role", "link");
        a.setAttribute("href", "#register-programme-control");
        li.appendChild(a);
        ul.appendChild(li);
    } else {
        setValid(programme);
    }

    if (hasError) {
        document.getElementById('register-error').classList.remove('d-none');
    } else {
        document.getElementById('register-error').classList.add('d-none');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('login-login-button')
        .addEventListener('click', login, false);

    document
        .getElementById('login-forgot-button')
        .addEventListener('click', forgot, false);

    document
        .getElementById('register-register-button')
        .addEventListener('click', register, false);
}, false);

document.getElementById("login-remmeber-control").addEventListener("click", function() {
  var target = $(event.target)[0];
  var state = target.getAttribute("checked");
  console.log(state);
  if (state == "true") {
    target.setAttribute("checked", "false");
    target.setAttribute("aria-checked", "false");
  }
  else {
    target.setAttribute("checked", "true");
    target.setAttribute("aria-checked", "true");
  }
})
