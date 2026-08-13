#include "server.h"

#include <iostream>
#include <limits>

Server::Server()
{
}


void Server::start()
{
    std::cout
        << "====================================\n";

    std::cout
        << "   BANKING MANAGEMENT SYSTEM\n";

    std::cout
        << "====================================\n";

    std::cout
        << "Server started successfully.\n\n";

    run();
}


void Server::stop()
{
    std::cout
        << "\nServer stopped.\n";
}


void Server::run()
{
    handleLogin();

    if (!auth.isLoggedIn())
    {
        std::cout
            << "Login failed.\n";

        return;
    }

    std::cout
        << "\nLogin successful!\n";

    std::cout
        << "Welcome, "
        << auth.getCurrentUser().username
        << "\n\n";

    showMenu();
}


void Server::handleLogin()
{
    std::string username;
    std::string password;

    std::cout
        << "Username: ";

    std::cin
        >> username;

    std::cout
        << "Password: ";

    std::cin
        >> password;

    auth.login(
        username,
        password
    );
}


void Server::showMenu()
{
    int choice;

    do
    {
        std::cout
            << "\n========== MENU ==========\n";

        std::cout
            << "1. Customer Management\n";

        std::cout
            << "2. Account Management\n";

        std::cout
            << "3. Transactions\n";

        std::cout
            << "4. Transfer\n";

        std::cout
            << "5. Logout\n";

        std::cout
            << "Choose: ";

        std::cin
            >> choice;


        switch (choice)
        {
            case 1:
                handleCustomers();
                break;

            case 2:
                handleAccounts();
                break;

            case 3:
                handleTransactions();
                break;

            case 4:
                handleTransfer();
                break;

            case 5:
                auth.logout();

                std::cout
                    << "Logged out.\n";

                break;

            default:
                std::cout
                    << "Invalid choice.\n";
        }

    }
    while (
        choice != 5 &&
        auth.isLoggedIn()
    );
}


void Server::handleCustomers()
{
    std::cout
        << "\nCustomer Management\n";

    std::cout
        << "Total Customers: "
        << customers.getCustomerCount()
        << "\n";
}


void Server::handleAccounts()
{
    std::cout
        << "\nAccount Management\n";

    std::cout
        << "Total Accounts: "
        << accounts.getAccountCount()
        << "\n";
}


void Server::handleTransactions()
{
    std::cout
        << "\nTransaction Management\n";

    std::cout
        << "Total Transactions: "
        << transactions.getTransactionCount()
        << "\n";
}


void Server::handleTransfer()
{
    std::cout
        << "\nTransfer Module\n";

    std::cout
        << "Transfer module ready.\n";
}