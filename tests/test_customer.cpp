#include "../backend/customer.h"

#include <cassert>
#include <iostream>

int main()
{
    CustomerManager manager;

    // Add customer
    Customer customer =
        manager.addCustomer(
            "Rahim Ahmed",
            "rahim@gmail.com",
            "01711123456",
            "Dhaka",
            "123456789"
        );

    // Check generated ID
    assert(customer.id == 1001);

    // Check customer information
    assert(
        customer.name == "Rahim Ahmed"
    );

    assert(
        customer.email == "rahim@gmail.com"
    );

    assert(
        customer.phone == "01711123456"
    );

    // Check customer exists
    Customer* found =
        manager.findCustomer(1001);

    assert(found != nullptr);

    // Check customer count
    assert(
        manager.getCustomerCount() == 1
    );

    std::cout << "================================\n";
    std::cout << "CUSTOMER TESTS PASSED\n";
    std::cout << "================================\n";

    return 0;
}