#include "../backend/account.h"

#include <cassert>
#include <iostream>

int main()
{
    AccountManager manager;

    // Create savings account
    Account account =
        manager.createAccount(
            1001,
            AccountType::SAVINGS,
            50000.00
        );

    // Check account number
    assert(
        account.accountNumber == 10000001
    );

    // Check customer
    assert(
        account.customerId == 1001
    );

    // Check balance
    assert(
        account.balance == 50000.00
    );

    // Test deposit
    bool depositResult =
        manager.deposit(
            10000001,
            10000.00
        );

    assert(
        depositResult == true
    );

    Account* updated =
        manager.findAccount(10000001);

    assert(updated != nullptr);

    assert(
        updated->balance == 60000.00
    );

    // Test withdrawal
    bool withdrawResult =
        manager.withdraw(
            10000001,
            5000.00
        );

    assert(
        withdrawResult == true
    );

    assert(
        updated->balance == 55000.00
    );

    std::cout << "================================\n";
    std::cout << "ACCOUNT TESTS PASSED\n";
    std::cout << "================================\n";

    return 0;
}