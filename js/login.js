// ============================================
// BANKING MANAGEMENT SYSTEM
// LOGIN JAVASCRIPT
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) {
        return;
    }

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const message = document.getElementById("loginMessage");

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();


        // Clear previous message
        message.textContent = "";
        message.className = "form-message";


        // Validate empty fields
        if (username === "" || password === "") {

            message.textContent =
                "Please enter username and password.";

            message.style.color = "#f04438";

            return;
        }


        /*
        ------------------------------------------------
        TEMPORARY LOGIN
        ------------------------------------------------

        This is only for frontend testing.

        Later this will become:

        HTML
          ↓
        JavaScript
          ↓
        C++ Server
          ↓
        auth.cpp
          ↓
        Authentication
        */

        if (username === "admin" && password === "admin123") {

            message.textContent =
                "Login successful. Redirecting...";

            message.style.color = "#12b76a";


            // Store login status temporarily
            localStorage.setItem(
                "isLoggedIn",
                "true"
            );

            localStorage.setItem(
                "username",
                username
            );


            // Redirect to dashboard
            setTimeout(function () {

                window.location.href =
                    "dashboard.html";

            }, 800);

        } else {

            message.textContent =
                "Invalid username or password.";

            message.style.color = "#f04438";

        }

    });

});