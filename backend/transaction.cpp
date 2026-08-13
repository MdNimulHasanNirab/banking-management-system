#include "transaction.h"

TransactionManager::TransactionManager()
{
    nextTransactionId = 1;
}


Transaction TransactionManager::createTransaction(
    TransactionType type,
    int fromAccount,
    int toAccount,
    double amount,
    const std::string& date
)
{
    Transaction transaction;

    transaction.id = nextTransactionId++;

    transaction.type = type;

    transaction.fromAccount =
        fromAccount;

    transaction.toAccount =
        toAccount;

    transaction.amount =
        amount;

    transaction.date =
        date;

    transaction.status =
        "Completed";

    transactions.push_back(transaction);

    return transaction;
}


std::vector<Transaction>
TransactionManager::getAllTransactions() const
{
    return transactions;
}


Transaction*
TransactionManager::findTransaction(int id)
{
    for (auto& transaction : transactions)
    {
        if (transaction.id == id)
        {
            return &transaction;
        }
    }

    return nullptr;
}


int TransactionManager::getTransactionCount() const
{
    return static_cast<int>(
        transactions.size()
    );
}