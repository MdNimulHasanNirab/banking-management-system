#include "customer.h"

CustomerManager::CustomerManager()
{
    nextId = 1001;
}


Customer CustomerManager::addCustomer(
    const std::string& name,
    const std::string& email,
    const std::string& phone,
    const std::string& address,
    const std::string& nid
)
{
    Customer customer;

    customer.id = nextId++;
    customer.name = name;
    customer.email = email;
    customer.phone = phone;
    customer.address = address;
    customer.nid = nid;
    customer.active = true;

    customers.push_back(customer);

    return customer;
}


bool CustomerManager::deleteCustomer(int id)
{
    for (auto& customer : customers)
    {
        if (customer.id == id)
        {
            customer.active = false;
            return true;
        }
    }

    return false;
}


Customer* CustomerManager::findCustomer(int id)
{
    for (auto& customer : customers)
    {
        if (customer.id == id)
        {
            return &customer;
        }
    }

    return nullptr;
}


std::vector<Customer>
CustomerManager::getAllCustomers() const
{
    return customers;
}


bool CustomerManager::updateCustomer(
    int id,
    const std::string& name,
    const std::string& email,
    const std::string& phone,
    const std::string& address
)
{
    Customer* customer = findCustomer(id);

    if (customer == nullptr)
    {
        return false;
    }

    customer->name = name;
    customer->email = email;
    customer->phone = phone;
    customer->address = address;

    return true;
}


int CustomerManager::getCustomerCount() const
{
    return static_cast<int>(customers.size());
}