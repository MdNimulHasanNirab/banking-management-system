#ifndef AUTH_H
#define AUTH_H

#include <string>

struct User
{
    int id;
    std::string username;
    std::string password;
    std::string role;
    bool active;
};

class Auth
{
private:
    User adminUser;

public:
    Auth();

    bool login(
        const std::string& username,
        const std::string& password
    );

    void logout();

    bool isLoggedIn() const;

    User getCurrentUser() const;

private:
    bool loggedIn;
};

#endif