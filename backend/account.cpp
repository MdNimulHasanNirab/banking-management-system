#include "account.h"

AccountManager::AccountManager()
{
    nextAccountNumber = 10000001;
}


Account AccountManager::createAccount(
    int customerId,
    AccountType type,
    double initialDeposit
)
{
    Account account;

    account.accountNumber = nextAccountNumber++;
    account.customerId = customerId;
    account.type = type;
    account.balance = initialDeposit;
    account.active = true;

    accounts.push_back(account);

    return account;
}


Account* AccountManager::findAccount(
    int accountNumber
)
{
    for (auto& account : accounts)
    {
        if (
            account.accountNumber == accountNumber
        )
        {
            return &account;
        }
    }

    return nullptr;
}


bool AccountManager::closeAccount(
    int accountNumber
)
{
    Account* account =
        findAccount(accountNumber);

    if (account == nullptr)
    {
        return false;
    }

    if (account->balance != 0)
    {
        return false;
    }

    account->active = false;

    return true;
}


bool AccountManager::deposit(
    int accountNumber,
    double amount
)
{
    if (amount <= 0)
    {
        return false;
    }

    Account* account =
        findAccount(accountNumber);

    if (account == nullptr ||
        !account->active)
    {
        return false;
    }

    account->balance += amount;

    return true;
}


bool AccountManager::withdraw(
    int accountNumber,
    double amount
)
{
    if (amount <= 0)
    {
        return false;
    }

    Account* account =
        findAccount(accountNumber);

    if (account == nullptr ||
        !account->active)
    {
        return false;
    }

    if (account->balance < amount)
    {
        return false;
    }

    account->balance -= amount;

    return true;
}


std::vector<Account>
AccountManager::getAllAccounts() const
{
    return accounts;
}


int AccountManager::getAccountCount() const
{
    return static_cast<int>(accounts.size());
}