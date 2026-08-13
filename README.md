# 🏦 Banking Management System

A modular **Banking Management System** developed as a CSE project using **C++, HTML, CSS, and JavaScript**.

The system is designed to simulate the core operations of a banking application, including user authentication, customer management, account management, deposits, withdrawals, fund transfers, and transaction management.

---

## 🌐 Live Demo

> 🚧 Live demo will be available after the frontend is deployed.

**Live Website:**  
`Coming Soon`

**GitHub Repository:**  
`Coming Soon`

---

# 📌 Project Overview

The Banking Management System is a full-stack software project designed to demonstrate how a banking application can be structured using separate frontend, backend, data, testing, and documentation layers.

The project follows a modular architecture where each major banking operation has its own C++ module.

### Main Components

```text
                    BANKING MANAGEMENT SYSTEM
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
      FRONTEND             BACKEND              DATA
    HTML/CSS/JS              C++              TXT Files
          │                   │                   │
          └───────────────────┼───────────────────┘
                              │
                              ▼
                         TESTING & DOCS
                         ✨ Features
🔐 Authentication

The authentication module manages system users.

Login
Logout
Username validation
Password validation
User roles
Active/inactive user status
👥 Customer Management

The customer module manages bank customers.

Add customer
View customers
Search customer
Update customer
Deactivate customer
Customer ID management
Customer Information
Customer ID
Name
Email
Phone
Address
NID
Status
💳 Account Management

The account module manages bank accounts.

Supported Account Types
Savings Account
Current Account
Operations
Create account
Generate account number
View account
Check balance
Deposit money
Withdraw money
Deactivate account
💰 Transaction Management

The transaction module records financial activities.

Supported Transactions
Deposit
Withdrawal
Fund Transfer

Each transaction contains information such as:

Transaction ID
Transaction Type
Source Account
Destination Account
Amount
Date
Status
🔄 Fund Transfer

The transfer system allows money to be transferred between accounts.

Example:

Account A
Balance: ৳50,000
       │
       │ Transfer ৳10,000
       ▼
Account B
Balance: ৳20,000

After Transfer

Account A → ৳40,000
Account B → ৳30,000

The system validates:

Source account
Destination account
Account status
Transfer amount
Available balance
🖥️ Frontend

The frontend is developed using:

HTML5
CSS3
JavaScript
Frontend Pages
File	Purpose
index.html	Landing page
login.html	User login
dashboard.html	Main dashboard
customers.html	Customer management
accounts.html	Account management
transactions.html	Transaction history
transfer.html	Fund transfer
Frontend Navigation
index.html
    │
    ▼
login.html
    │
    ▼
dashboard.html
    │
    ├──► customers.html
    │
    ├──► accounts.html
    │
    ├──► transactions.html
    │
    └──► transfer.html
⚙️ Backend

The backend is developed using C++.

The backend is divided into separate modules.

backend/
│
├── main.cpp
├── server.cpp
├── server.h
│
├── auth.cpp
├── auth.h
│
├── customer.cpp
├── customer.h
│
├── account.cpp
├── account.h
│
├── transaction.cpp
└── transaction.h
Backend Modules
main.cpp

Main entry point of the backend application.

server.cpp / server.h

Responsible for server-related operations and communication.

auth.cpp / auth.h

Responsible for authentication and user management.

customer.cpp / customer.h

Responsible for customer management.

account.cpp / account.h

Responsible for account creation and account operations.

transaction.cpp / transaction.h

Responsible for transaction records and transaction management.

💾 Data Storage

The current version uses structured text files for lightweight data storage.

data/
│
├── users.txt
├── customers.txt
├── accounts.txt
└── transactions.txt
users.txt

Stores system user information.

ID|Username|Password|Role|Active

Example:

1|admin|admin123|Administrator|1
customers.txt

Stores customer information.

ID|Name|Email|Phone|Address|NID|Active

Example:

1001|Rahim Ahmed|rahim@gmail.com|01711123456|Dhaka|123456789|1
accounts.txt

Stores bank account information.

AccountNumber|CustomerID|AccountType|Balance|Active

Example:

10000001|1001|SAVINGS|50000.00|1
transactions.txt

Stores transaction history.

TransactionID|Type|FromAccount|ToAccount|Amount|Date|Status

Example:

1|DEPOSIT|0|10000001|5000.00|2026-08-13|Completed
🧪 Testing

The project contains separate test programs for the major backend modules.

tests/
│
├── test_auth.cpp
├── test_customer.cpp
├── test_account.cpp
└── test_transaction.cpp
Tested Areas
Authentication
Customer creation
Customer search
Account creation
Deposit
Withdrawal
Transaction creation
Basic data validation

The testing structure allows individual modules to be tested before integrating the complete system.

📚 Documentation

Technical documentation is stored inside the docs/ directory.

docs/
│
├── system-design.md
├── database-design.md
└── api-documentation.md
Documentation Includes
System architecture
Module design
Data structure
Data relationships
API design
Development plans
🏗️ Project Architecture

The system follows a layered architecture:

┌─────────────────────────────────────┐
│              USER                   │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│             FRONTEND                │
│         HTML + CSS + JS             │
└──────────────────┬──────────────────┘
                   │
                   │ HTTP / API
                   ▼
┌─────────────────────────────────────┐
│          C++ BACKEND                │
│                                     │
│ Authentication                      │
│ Customer Management                 │
│ Account Management                  │
│ Transaction Management              │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│            DATA LAYER               │
│                                     │
│ users.txt                           │
│ customers.txt                       │
│ accounts.txt                        │
│ transactions.txt                    │
└─────────────────────────────────────┘
📁 Project Structure
BANKING-MANAGEMENT-SYSTEM/
│
├── backend/
│   ├── main.cpp
│   ├── server.cpp
│   ├── server.h
│   ├── auth.cpp
│   ├── auth.h
│   ├── customer.cpp
│   ├── customer.h
│   ├── account.cpp
│   ├── account.h
│   ├── transaction.cpp
│   └── transaction.h
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── dashboard.html
│   ├── customers.html
│   ├── accounts.html
│   ├── transactions.html
│   └── transfer.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── login.js
│   ├── dashboard.js
│   ├── customers.js
│   ├── accounts.js
│   ├── transactions.js
│   └── transfer.js
│
├── data/
│   ├── users.txt
│   ├── customers.txt
│   ├── accounts.txt
│   └── transactions.txt
│
├── tests/
│   ├── test_auth.cpp
│   ├── test_customer.cpp
│   ├── test_account.cpp
│   └── test_transaction.cpp
│
├── docs/
│   ├── system-design.md
│   ├── database-design.md
│   └── api-documentation.md
│
└── README.md
🛠️ Technology Stack
Category	Technology
Programming Language	C++
Frontend	HTML5
Styling	CSS3
Client-side Logic	JavaScript
Data Storage	Text Files
Testing	C++
IDE	Visual Studio Code
Version Control	Git
Hosting	GitHub Pages
🚀 How to Run
1. Clone the Repository
git clone YOUR_GITHUB_REPOSITORY_URL

Move into the project:

cd BANKING-MANAGEMENT-SYSTEM
2. Run the Frontend

Open the project in Visual Studio Code.

Install/use the Live Server extension.

Then open:

frontend/index.html

using Live Server.

3. Compile the Backend

From the project root:

g++ backend/main.cpp backend/server.cpp backend/auth.cpp backend/customer.cpp backend/account.cpp backend/transaction.cpp -o banking
Windows
banking.exe
Linux/macOS
./banking
🧪 Running Tests
Authentication Test
g++ tests/test_auth.cpp backend/auth.cpp -o test_auth

Run:

test_auth
Customer Test
g++ tests/test_customer.cpp backend/customer.cpp -o test_customer

Run:

test_customer
Account Test
g++ tests/test_account.cpp backend/account.cpp -o test_account

Run:

test_account
Transaction Test
g++ tests/test_transaction.cpp backend/transaction.cpp -o test_transaction

Run:

test_transaction
🔒 Security

This project is currently an educational banking system and should not be used for real financial operations.

The development version may use simple text-based authentication for demonstration purposes.

Future security improvements include:

Password hashing
Secure authentication
Session management
Role-based authorization
Input validation
API authentication
HTTPS
Audit logging
Database security
Backup and recovery

Never use real passwords, NID numbers, account numbers, or real customer information in this repository.

🔮 Future Development

The project will be developed in several stages.

Phase 1 — Project Structure
 Frontend structure
 Backend structure
 Data structure
 Testing structure
 Documentation
Phase 2 — Core Backend
 File loading
 File saving
 Customer operations
 Account operations
 Transaction operations
 Transfer operations
Phase 3 — Backend Integration
 C++ HTTP server
 API endpoints
 Frontend/backend communication
 Login API
 Customer API
 Account API
 Transaction API
 Transfer API
Phase 4 — Advanced System
 Database integration
 Password hashing
 Role-based access control
 Account statements
 Reports
 Audit logs
 Backup system
 Improved security
🎯 Learning Objectives

This project is designed to demonstrate practical knowledge of:

C++
Object-Oriented Programming
Data Structures
File Handling
Modular Programming
HTML
CSS
JavaScript
Backend Development
API Development
Software Testing
System Architecture
Git and GitHub
📈 Development Status
Module	Status
Project Architecture	✅ Completed
Frontend Structure	✅ Completed
CSS	✅ Completed
JavaScript Structure	✅ Completed
Data Structure	✅ Completed
Backend Structure	✅ Completed
Testing Structure	✅ Completed
Documentation	✅ Completed
Backend File Persistence	🚧 In Development
C++ HTTP Server	🚧 In Development
Frontend ↔ Backend API	⏳ Planned
Production Deployment	⏳ Planned
👨‍💻 Author

NH Nirab

CSE Student
Bangladesh

📄 Disclaimer

This project is developed for educational and academic purposes.

It is a simulation of a banking management system and is not intended for real-world banking or financial transactions.

The system should not be used to store or process real financial or personal information.

⭐ Support

If you find this project useful for learning, consider giving the repository a ⭐ on GitHub.

License

This project is intended for educational use.


### One correction from the earlier README

You previously had `log.html`. If your actual file is named **`login.html`**, use `login.html` everywhere. I used `login.html` in this version because that's the more standard naming.

Also, don't put a fake live URL in the README. Once you deploy it, replace:

```markdown
**Live Website:**  
`Coming Soon`