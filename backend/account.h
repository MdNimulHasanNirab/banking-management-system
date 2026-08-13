#ifndef ACCOUNT_H
#define ACCOUNT_H

#include <string>
#include <vector>

enum class AccountType
{
    SAVINGS,
    CURRENT
};

struct Account
{
    int accountNumber;
    int customerId;

    AccountType type;

    double balance;

    bool active;
};

class AccountManager
{
private:
    std::vector<Account> accounts;

    int nextAccountNumber;

public:

    AccountManager();

    Account createAccount(
        int customerId,
        AccountType type,
        double initialDeposit
    );

    Account* findAccount(int accountNumber);

    bool closeAccount(int accountNumber);

    bool deposit(
        int accountNumber,
        double amount
    );

    bool withdraw(
        int accountNumber,
        double amount
    );

    std::vector<Account> getAllAccounts() const;

    int getAccountCount() const;
};

#endif