// ============================================
// BANKING MANAGEMENT SYSTEM
// ACCOUNTS JAVASCRIPT
// ============================================

document.addEventListener("DOMContentLoaded", function () {


    // --------------------------------------------
    // ACCOUNT DATA
    // --------------------------------------------

    const accounts = [

        {
            accountNumber: "ACC-10021",
            customer: "Rahim Ahmed",
            type: "Savings",
            balance: 125000,
            status: "Active"
        },

        {
            accountNumber: "ACC-10045",
            customer: "Karim Hasan",
            type: "Current",
            balance: 250500,
            status: "Active"
        },

        {
            accountNumber: "ACC-10067",
            customer: "Nusrat Jahan",
            type: "Savings",
            balance: 75000,
            status: "Pending"
        }

    ];


    // --------------------------------------------
    // SEARCH ACCOUNT
    // --------------------------------------------

    const searchInput =
        document.querySelector(
            ".search-input"
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
    // ACCOUNT TYPE FILTER
    // --------------------------------------------

    const selects =
        document.querySelectorAll(
            "select"
        );


    selects.forEach(function (select) {

        select.addEventListener(
            "change",
            function () {

                const selectedType =
                    this.value
                        .toLowerCase();


                if (
                    !selectedType.includes(
                        "all"
                    )
                ) {

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
                                selectedType
                            )
                        ) {

                            row.style.display =
                                "";

                        } else {

                            row.style.display =
                                "none";

                        }

                    });

                }

            }
        );

    });


    // --------------------------------------------
    // CREATE ACCOUNT
    // --------------------------------------------

    const createButton =
        document.querySelector(
            ".create-account-btn"
        );


    if (createButton) {

        createButton.addEventListener(
            "click",
            function () {

                alert(
                    "Account creation will be connected to the C++ backend."
                );

            }
        );

    }

});