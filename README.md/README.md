# 🏦 Banking Management System

A modular **Banking Management System** developed as an academic CSE project using **C++, HTML5, CSS3, and JavaScript**.

The project simulates essential banking operations such as user authentication, customer management, account management, deposits, withdrawals, fund transfers, and transaction tracking.

> ⚠️ **Educational Project:** This system is designed for learning and academic purposes only. It is **not intended for real-world banking or financial transactions**.

---

🚀 Live Demo
Add your deployed project link here:




## 📌 Project Overview

The Banking Management System demonstrates how a banking application can be organized into separate frontend, backend, data, testing, and documentation layers.

The backend is developed in **C++**, while the frontend uses **HTML, CSS, and JavaScript**.

### System Architecture

```text
                    ┌─────────────────────────┐
                    │          USER           │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │        FRONTEND         │
                    │     HTML + CSS + JS     │
                    └────────────┬────────────┘
                                 │
                              HTTP/API
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │       C++ BACKEND       │
                    │                         │
                    │  Authentication         │
                    │  Customer Management    │
                    │  Account Management     │
                    │  Transaction Management │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │       DATA LAYER        │
                    │       Text Files        │
                    └─────────────────────────┘
```

---

## ✨ Features

### 🔐 Authentication

* User login
* User logout
* Username validation
* Password validation
* User roles
* Active/inactive user status

### 👥 Customer Management

* Add customers
* View customers
* Search customers
* Update customer information
* Deactivate customers
* Customer ID management

Customer information includes:

* Customer ID
* Name
* Email
* Phone
* Address
* NID
* Account status

### 💳 Account Management

Supported account types:

* Savings Account
* Current Account

Available operations:

* Create bank account
* Generate account number
* View account information
* Check balance
* Deposit money
* Withdraw money
* Deactivate account

### 💰 Transaction Management

The system supports:

* Deposits
* Withdrawals
* Fund transfers

Each transaction can contain:

```text
Transaction ID
Transaction Type
Source Account
Destination Account
Amount
Date
Status
```

### 🔄 Fund Transfer

The system supports transferring money between accounts while checking:

* Source account
* Destination account
* Account status
* Transfer amount
* Available balance

Example:

```text
Account A
Balance: ৳50,000

       │
       │ Transfer ৳10,000
       ▼

Account B
Balance: ৳20,000

After Transfer:

Account A → ৳40,000
Account B → ৳30,000
```

---

## 🖥️ Frontend

The frontend is built using:

* HTML5
* CSS3
* JavaScript

### Frontend Pages

| File                | Purpose             |
| ------------------- | ------------------- |
| `index.html`        | Landing page        |
| `login.html`        | User login          |
| `dashboard.html`    | Main dashboard      |
| `customers.html`    | Customer management |
| `accounts.html`     | Account management  |
| `transactions.html` | Transaction history |
| `transfer.html`     | Fund transfer       |

### Frontend Flow

```text
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
```

---

## ⚙️ Backend

The backend is written in **C++** and organized into separate modules.

```text
backend/
├── main.cpp
├── server.cpp
├── server.h
├── auth.cpp
├── auth.h
├── customer.cpp
├── customer.h
├── account.cpp
├── account.h
├── transaction.cpp
└── transaction.h
```

### Backend Modules

| Module              | Responsibility                     |
| ------------------- | ---------------------------------- |
| `main.cpp`          | Application entry point            |
| `server.cpp/h`      | Server-related operations          |
| `auth.cpp/h`        | Authentication and user management |
| `customer.cpp/h`    | Customer management                |
| `account.cpp/h`     | Bank account management            |
| `transaction.cpp/h` | Transaction management             |

---

## 💾 Data Storage

The current version uses structured text files for lightweight data storage.

```text
data/
├── users.txt
├── customers.txt
├── accounts.txt
└── transactions.txt
```

### `users.txt`

```text
ID|Username|Password|Role|Active
```

### `customers.txt`

```text
ID|Name|Email|Phone|Address|NID|Active
```

### `accounts.txt`

```text
AccountNumber|CustomerID|AccountType|Balance|Active
```

### `transactions.txt`

```text
TransactionID|Type|FromAccount|ToAccount|Amount|Date|Status
```

> **Note:** Do not store real passwords, NID numbers, account numbers, or personal information in this repository.

---

## 🧪 Testing

The project includes separate C++ test programs for major backend modules.

```text
tests/
├── test_auth.cpp
├── test_customer.cpp
├── test_account.cpp
└── test_transaction.cpp
```

### Tested Areas

* Authentication
* Customer creation
* Customer search
* Account creation
* Deposits
* Withdrawals
* Transaction creation
* Basic data validation

---

## 📚 Documentation

Additional technical documentation is available in the `docs/` directory.

```text
docs/
├── system-design.md
├── database-design.md
└── api-documentation.md
```

Documentation covers:

* System architecture
* Module design
* Data structures
* Data relationships
* API design
* Development plans

---

## 📁 Project Structure

```text
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
```

---

## 🛠️ Technology Stack

| Category          | Technology         |
| ----------------- | ------------------ |
| Backend           | C++                |
| Frontend          | HTML5              |
| Styling           | CSS3               |
| Client-side Logic | JavaScript         |
| Data Storage      | Text Files         |
| Testing           | C++                |
| IDE               | Visual Studio Code |
| Version Control   | Git & GitHub       |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

* **Visual Studio Code**
* **C++ compiler (G++)**
* **Git**
* **Live Server extension** for VS Code

---

### 1. Clone the Repository

```bash
git clone https://github.com/Shadow-cloud478/banking-management-system.git
```

Move into the project directory:

```bash
cd banking-management-system
```

---

### 2. Run the Frontend

Open the project in **Visual Studio Code**.

Install the **Live Server** extension.

Then open:

```text
frontend/index.html
```

using Live Server.

---

### 3. Compile the Backend

From the project root:

```bash
g++ backend/main.cpp backend/server.cpp backend/auth.cpp backend/customer.cpp backend/account.cpp backend/transaction.cpp -o banking
```

#### Windows

```bash
banking.exe
```

#### Linux / macOS

```bash
./banking
```

---

## 🧪 Running Tests

### Authentication Test

Compile:

```bash
g++ tests/test_auth.cpp backend/auth.cpp -o test_auth
```

Run:

```bash
test_auth
```

### Customer Test

```bash
g++ tests/test_customer.cpp backend/customer.cpp -o test_customer
```

Run:

```bash
test_customer
```

### Account Test

```bash
g++ tests/test_account.cpp backend/account.cpp -o test_account
```

Run:

```bash
test_account
```

### Transaction Test

```bash
g++ tests/test_transaction.cpp backend/transaction.cpp -o test_transaction
```

Run:

```bash
test_transaction
```

---

## 🔒 Security Notice

This project is an **educational banking simulation** and should not be used for real financial operations.

The current development version may use simple text-based authentication and file storage for demonstration purposes.

### Planned Security Improvements

* Password hashing
* Secure authentication
* Session management
* Role-based authorization
* Strong input validation
* API authentication
* HTTPS
* Audit logging
* Database security
* Backup and recovery

**Never use real financial or personal information in this repository.**

---

## 🔮 Future Development

Planned improvements include:

### Phase 1 — Project Foundation

* [x] Frontend structure
* [x] Backend structure
* [x] Data structure
* [x] Testing structure
* [x] Documentation

### Phase 2 — Core Backend

* [ ] File loading
* [ ] File saving
* [ ] Customer operations
* [ ] Account operations
* [ ] Transaction operations
* [ ] Transfer operations

### Phase 3 — Backend Integration

* [ ] C++ HTTP server
* [ ] API endpoints
* [ ] Frontend/backend communication
* [ ] Login API
* [ ] Customer API
* [ ] Account API
* [ ] Transaction API
* [ ] Transfer API

### Phase 4 — Advanced Features

* [ ] Database integration
* [ ] Password hashing
* [ ] Role-based access control
* [ ] Account statements
* [ ] Reports
* [ ] Audit logs
* [ ] Backup system
* [ ] Improved security

---

## 🎯 Learning Objectives

This project demonstrates practical knowledge of:

* C++
* Object-Oriented Programming
* Data Structures
* File Handling
* Modular Programming
* HTML5
* CSS3
* JavaScript
* Backend Development
* API Development
* Software Testing
* System Architecture
* Git & GitHub

---

## 📈 Development Status

| Component                | Status            |
| ------------------------ | ----------------- |
| Project Architecture     | ✅ Completed       |
| Frontend Structure       | ✅ Completed       |
| CSS                      | ✅ Completed       |
| JavaScript Structure     | ✅ Completed       |
| Data Structure           | ✅ Completed       |
| Backend Structure        | ✅ Completed       |
| Testing Structure        | ✅ Completed       |
| Documentation            | ✅ Completed       |
| Backend File Persistence | 🚧 In Development |
| C++ HTTP Server          | 🚧 In Development |
| Frontend ↔ Backend API   | ⏳ Planned         |
| Production Deployment    | ⏳ Planned         |

---



# # 👨‍💻 Developer
MD NIMUL HASAN (NIRAB)
         

Department of Computer Science and Engineering (CSE)

Bangladesh University of Business and Technology (BUBT)
---

## 📄 Disclaimer

This project is developed for **educational and academic purposes**.

It is a simulation of a banking management system and is **not intended for real-world banking or financial transactions**.

The system should not be used to store or process real financial or personal information.

---

## ⭐ Support

If you find this project useful for learning, consider giving the repository a ⭐ on GitHub.

**Repository:**
https://github.com/Shadow-cloud478/banking-management-system
