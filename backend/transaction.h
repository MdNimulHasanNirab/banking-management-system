#ifndef TRANSACTION_H
#define TRANSACTION_H

#include <string>
#include <vector>

enum class TransactionType
{
    DEPOSIT,
    WITHDRAW,
    TRANSFER
};

struct Transaction
{
    int id;

    TransactionType type;

    int fromAccount;
    int toAccount;

    double amount;

    std::string date;
    std::string status;
};

class TransactionManager
{
private:
    std::vector<Transaction> transactions;

    int nextTransactionId;

public:

    TransactionManager();

    Transaction createTransaction(
        TransactionType type,
        int fromAccount,
        int toAccount,
        double amount,
        const std::string& date
    );

    std::vector<Transaction>
    getAllTransactions() const;

    Transaction* findTransaction(int id);

    int getTransactionCount() const;
};

#endif