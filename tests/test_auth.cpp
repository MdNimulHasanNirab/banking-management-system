#include "../backend/auth.h"

#include <cassert>
#include <iostream>

int main()
{
    Auth auth;

    // Test correct login
    assert(
        auth.login("admin", "admin123") == true
    );

    // Test login status
    assert(
        auth.isLoggedIn() == true
    );

    // Test logout
    auth.logout();

    assert(
        auth.isLoggedIn() == false
    );

    // Test incorrect password
    assert(
        auth.login("admin", "wrongpassword") == false
    );

    std::cout << "================================\n";
    std::cout << "AUTH TESTS PASSED\n";
    std::cout << "================================\n";

    return 0;
}