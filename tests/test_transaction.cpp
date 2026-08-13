#include "../backend/transaction.h"

#include <cassert>
#include <iostream>

int main()
{
    TransactionManager manager;

    // Create deposit transaction
    Transaction transaction =
        manager.createTransaction(
            TransactionType::DEPOSIT,
            0,
            10000001,
            5000.00,
            "2026-08-13"
        );

    // Check transaction ID
    assert(
        transaction.id == 1
    );

    // Check amount
    assert(
        transaction.amount == 5000.00
    );

    // Check destination account
    assert(
        transaction.toAccount == 10000001
    );

    // Check status
    assert(
        transaction.status == "Completed"
    );

    // Check transaction exists
    Transaction* found =
        manager.findTransaction(1);

    assert(found != nullptr);

    std::cout << "================================\n";
    std::cout << "TRANSACTION TESTS PASSED\n";
    std::cout << "================================\n";

    return 0;
}