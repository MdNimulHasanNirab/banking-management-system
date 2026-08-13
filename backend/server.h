#ifndef SERVER_H
#define SERVER_H

#include "auth.h"
#include "customer.h"
#include "account.h"
#include "transaction.h"

class Server
{
private:

    Auth auth;

    CustomerManager customers;

    AccountManager accounts;

    TransactionManager transactions;


public:

    Server();

    void start();

    void stop();

    void run();

private:

    void showMenu();

    void handleLogin();

    void handleCustomers();

    void handleAccounts();

    void handleTransactions();

    void handleTransfer();
};

#endif