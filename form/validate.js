document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("rform");
    let checkboxes = document.querySelectorAll('input[name="gender"]');

    // Ensure only one checkbox can be checked at a time
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            checkboxes.forEach((cb) => {
                if (cb !== this) cb.checked = false; // Uncheck other checkboxes
            });
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        let fname = document.getElementById("fname").value.trim();
        let lname = document.getElementById("lname").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let cpassword = document.getElementById("cpassword").value.trim();
        let genderSelected = Array.from(checkboxes).some(cb => cb.checked);

        // Get error message elements
        let fnameError = document.getElementById("fname-error");
        let lnameError = document.getElementById("lname-error");
        let emailError = document.getElementById("email-error");
        let passwordError = document.getElementById("password-error");
        let cpasswordError = document.getElementById("cpassword-error");
        let genderError = document.getElementById("gender-error");

        // Clear previous error messages
        fnameError.textContent = "";
        lnameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        cpasswordError.textContent = "";
        genderError.textContent = "";

        let valid = true;

        // Name validation
        if (fname === "") {
            fnameError.textContent = "First name is required.";
            valid = false;
        }
        if (lname === "") {
            lnameError.textContent = "Last name is required.";
            valid = false;
        }

        // Email validation
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Invalid email format.";
            valid = false;
        }

        // Password validation
        if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters long.";
            valid = false;
        }
        if (cpassword !== password) {
            cpasswordError.textContent = "Passwords do not match.";
            valid = false;
        }

        // Gender validation
        if (!genderSelected) {
            genderError.textContent = "Please select a gender.";
            valid = false;
        }

        // If valid, submit the form
        if (valid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });
});
