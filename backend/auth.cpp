#include "auth.h"

Auth::Auth()
{
    adminUser.id = 1;
    adminUser.username = "admin";
    adminUser.password = "admin123";
    adminUser.role = "Administrator";
    adminUser.active = true;

    loggedIn = false;
}


bool Auth::login(
    const std::string& username,
    const std::string& password
)
{
    if (
        username == adminUser.username &&
        password == adminUser.password &&
        adminUser.active
    )
    {
        loggedIn = true;
        return true;
    }

    return false;
}


void Auth::logout()
{
    loggedIn = false;
}


bool Auth::isLoggedIn() const
{
    return loggedIn;
}


User Auth::getCurrentUser() const
{
    return adminUser;
}