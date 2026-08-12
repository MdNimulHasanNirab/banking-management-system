// ============================================
// BANKING MANAGEMENT SYSTEM
// DASHBOARD JAVASCRIPT
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    // --------------------------------------------
    // CHECK LOGIN
    // --------------------------------------------

    const isLoggedIn =
        localStorage.getItem("isLoggedIn");

    /*
    Uncomment this when you want to
    protect the dashboard.

    if (isLoggedIn !== "true") {
        window.location.href = "log.html";
        return;
    }
    */


    // --------------------------------------------
    // DISPLAY USERNAME
    // --------------------------------------------

    const username =
        localStorage.getItem("username");

    const userElements =
        document.querySelectorAll(".username");

    userElements.forEach(function (element) {

        if (username) {
            element.textContent = username;
        }

    });


    // --------------------------------------------
    // MOBILE SIDEBAR
    // --------------------------------------------

    const menuButton =
        document.querySelector(".mobile-menu");

    const sidebar =
        document.querySelector(".sidebar");


    if (menuButton && sidebar) {

        menuButton.addEventListener(
            "click",
            function () {

                sidebar.classList.toggle("show");

            }
        );

    }


    // --------------------------------------------
    // DASHBOARD DATA
    // --------------------------------------------

    /*
    Temporary data.

    Later these values will come
    from the C++ backend.
    */

    const dashboardData = {

        customers: 1250,

        accounts: 1890,

        balance: "৳25.5M",

        transactions: 15420

    };


    // --------------------------------------------
    // UPDATE STATISTICS
    // --------------------------------------------

    const customerElement =
        document.getElementById("totalCustomers");

    const accountElement =
        document.getElementById("totalAccounts");

    const balanceElement =
        document.getElementById("totalBalance");

    const transactionElement =
        document.getElementById("totalTransactions");


    if (customerElement) {
        customerElement.textContent =
            dashboardData.customers;
    }

    if (accountElement) {
        accountElement.textContent =
            dashboardData.accounts;
    }

    if (balanceElement) {
        balanceElement.textContent =
            dashboardData.balance;
    }

    if (transactionElement) {
        transactionElement.textContent =
            dashboardData.transactions;
    }


    // --------------------------------------------
    // LOGOUT
    // --------------------------------------------

    const logoutButtons =
        document.querySelectorAll(".logout");


    logoutButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                localStorage.removeItem(
                    "isLoggedIn"
                );

                localStorage.removeItem(
                    "username"
                );

                window.location.href =
                    "log.html";

            }
        );

    });

});