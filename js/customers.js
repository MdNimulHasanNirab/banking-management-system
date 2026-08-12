// ============================================
// BANKING MANAGEMENT SYSTEM
// CUSTOMERS JAVASCRIPT
// ============================================

document.addEventListener("DOMContentLoaded", function () {


    // --------------------------------------------
    // CUSTOMER DATA
    // --------------------------------------------

    /*
    Temporary frontend data.

    Later this will come from:

    C++ backend
        ↓
    customer.cpp
        ↓
    API
        ↓
    customers.js
    */

    const customers = [

        {
            id: "CUS-1001",
            name: "Rahim Ahmed",
            email: "rahim@example.com",
            phone: "01711-123456",
            account: "ACC-10021",
            status: "Active"
        },

        {
            id: "CUS-1002",
            name: "Karim Hasan",
            email: "karim@example.com",
            phone: "01822-654321",
            account: "ACC-10045",
            status: "Active"
        },

        {
            id: "CUS-1003",
            name: "Nusrat Jahan",
            email: "nusrat@example.com",
            phone: "01933-987654",
            account: "ACC-10067",
            status: "Pending"
        },

        {
            id: "CUS-1004",
            name: "Tanvir Rahman",
            email: "tanvir@example.com",
            phone: "01644-222333",
            account: "ACC-10089",
            status: "Active"
        }

    ];


    // --------------------------------------------
    // SEARCH
    // --------------------------------------------

    const searchInput =
        document.getElementById(
            "customerSearch"
        );


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const searchValue =
                    this.value
                        .toLowerCase()
                        .trim();


                const rows =
                    document.querySelectorAll(
                        "tbody tr"
                    );


                rows.forEach(function (row) {

                    const rowText =
                        row.textContent
                            .toLowerCase();


                    if (
                        rowText.includes(
                            searchValue
                        )
                    ) {

                        row.style.display = "";

                    } else {

                        row.style.display =
                            "none";

                    }

                });

            }
        );

    }


    // --------------------------------------------
    // ADD CUSTOMER BUTTON
    // --------------------------------------------

    const addCustomerButton =
        document.querySelector(
            ".add-customer-btn"
        );


    if (addCustomerButton) {

        addCustomerButton.addEventListener(
            "click",
            function () {

                alert(
                    "Customer registration module will be connected to the C++ backend."
                );

            }
        );

    }


    // --------------------------------------------
    // CUSTOMER ACTION BUTTONS
    // --------------------------------------------

    const actionButtons =
        document.querySelectorAll(
            ".action-btn"
        );


    actionButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                alert(
                    "Customer action menu"
                );

            }
        );

    });

});