#ifndef CUSTOMER_H
#define CUSTOMER_H

#include <string>
#include <vector>

struct Customer
{
    int id;
    std::string name;
    std::string email;
    std::string phone;
    std::string address;
    std::string nid;
    bool active;
};

class CustomerManager
{
private:
    std::vector<Customer> customers;

    int nextId;

public:

    CustomerManager();

    Customer addCustomer(
        const std::string& name,
        const std::string& email,
        const std::string& phone,
        const std::string& address,
        const std::string& nid
    );

    bool deleteCustomer(int id);

    Customer* findCustomer(int id);

    std::vector<Customer> getAllCustomers() const;

    bool updateCustomer(
        int id,
        const std::string& name,
        const std::string& email,
        const std::string& phone,
        const std::string& address
    );

    int getCustomerCount() const;
};

#endif