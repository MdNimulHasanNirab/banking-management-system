// ============================================
// BANKING MANAGEMENT SYSTEM
// TRANSACTIONS JAVASCRIPT
// ============================================

document.addEventListener("DOMContentLoaded", function () {


    // --------------------------------------------
    // TRANSACTION DATA
    // --------------------------------------------

    const transactions = [

        {
            id: "TRX-10001",
            account: "ACC-10021",
            type: "Deposit",
            amount: 10000,
            status: "Completed",
            date: "13 Aug 2026"
        },

        {
            id: "TRX-10002",
            account: "ACC-10045",
            type: "Withdrawal",
            amount: 2000,
            status: "Completed",
            date: "13 Aug 2026"
        },

        {
            id: "TRX-10003",
            account: "ACC-10067",
            type: "Transfer",
            amount: 5000,
            status: "Completed",
            date: "12 Aug 2026"
        },

        {
            id: "TRX-10004",
            account: "ACC-10089",
            type: "Deposit",
            amount: 25000,
            status: "Pending",
            date: "12 Aug 2026"
        }

    ];


    // --------------------------------------------
    // SEARCH TRANSACTION
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
    // TRANSACTION TYPE FILTER
    // --------------------------------------------

    const typeSelect =
        document.querySelector(
            ".transaction-type-filter"
        );


    if (typeSelect) {

        typeSelect.addEventListener(
            "change",
            function () {

                const selectedType =
                    this.value
                        .toLowerCase();


                const rows =
                    document.querySelectorAll(
                        "tbody tr"
                    );


                rows.forEach(function (row) {

                    const rowText =
                        row.textContent
                            .toLowerCase();


                    if (
                        selectedType === "all" ||
                        selectedType === "" ||
                        rowText.includes(
                            selectedType
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
    // TRANSACTION DATE FILTER
    // --------------------------------------------

    const dateInput =
        document.querySelector(
            ".transaction-date-filter"
        );


    if (dateInput) {

        dateInput.addEventListener(
            "change",
            function () {

                console.log(
                    "Selected date:",
                    this.value
                );

                /*
                Later:

                Send selected date
                to C++ backend and
                retrieve transactions.
                */

            }
        );

    }

});