// ============================================
// BANKING MANAGEMENT SYSTEM
// TRANSFER JAVASCRIPT
// ============================================

document.addEventListener("DOMContentLoaded", function () {


    const transferForm =
        document.getElementById(
            "transferForm"
        );


    if (!transferForm) {
        return;
    }


    transferForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // ------------------------------------
            // GET FORM VALUES
            // ------------------------------------

            const fromAccount =
                document.getElementById(
                    "fromAccount"
                );

            const toAccount =
                document.getElementById(
                    "toAccount"
                );

            const amount =
                document.getElementById(
                    "transferAmount"
                );

            const note =
                document.getElementById(
                    "transferNote"
                );

            const message =
                document.getElementById(
                    "transferMessage"
                );


            // ------------------------------------
            // VALIDATION
            // ------------------------------------

            if (
                !fromAccount ||
                !toAccount ||
                !amount ||
                !message
            ) {

                return;

            }


            const source =
                fromAccount.value.trim();

            const destination =
                toAccount.value.trim();

            const transferAmount =
                Number(amount.value);


            // Empty source account

            if (source === "") {

                showError(
                    message,
                    "Please select a source account."
                );

                return;

            }


            // Empty destination

            if (destination === "") {

                showError(
                    message,
                    "Please enter destination account number."
                );

                return;

            }


            // Same account

            if (source === destination) {

                showError(
                    message,
                    "Source and destination accounts cannot be the same."
                );

                return;

            }


            // Invalid amount

            if (
                isNaN(transferAmount) ||
                transferAmount <= 0
            ) {

                showError(
                    message,
                    "Please enter a valid transfer amount."
                );

                return;

            }


            // ------------------------------------
            // SUCCESS
            // ------------------------------------

            message.textContent =
                "Transfer request submitted successfully.";

            message.style.color =
                "#12b76a";


            /*
            ---------------------------------------
            FUTURE BACKEND CONNECTION

            Example:

            fetch("../backend/transfer", {
                method: "POST",
                body: JSON.stringify({
                    from: source,
                    to: destination,
                    amount: transferAmount,
                    note: note.value
                })
            });

            ---------------------------------------
            */


            // Clear amount after submission

            amount.value = "";

            if (note) {
                note.value = "";
            }

        }
    );


    // --------------------------------------------
    // ERROR FUNCTION
    // --------------------------------------------

    function showError(element, text) {

        element.textContent = text;

        element.style.color =
            "#f04438";

    }

});