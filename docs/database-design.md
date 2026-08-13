# Database Design

## 1. Overview

The Banking Management System currently uses structured text files
for data storage.

The data directory contains four main files:

- users.txt
- customers.txt
- accounts.txt
- transactions.txt

---

## 2. Users

File:

data/users.txt

Format:

ID|Username|Password|Role|Active

Example:

1|admin|admin123|Administrator|1

### Fields

| Field | Description |
|---|---|
| ID | Unique user ID |
| Username | Login username |
| Password | User password |
| Role | User role |
| Active | Account status |

---

## 3. Customers

File:

data/customers.txt

Format:

ID|Name|Email|Phone|Address|NID|Active

Example:

1001|Rahim Ahmed|rahim@gmail.com|01711123456|Dhaka|123456789|1

### Fields

| Field | Description |
|---|---|
| ID | Unique customer ID |
| Name | Customer name |
| Email | Customer email |
| Phone | Customer phone number |
| Address | Customer address |
| NID | National ID |
| Active | Customer status |

---

## 4. Accounts

File:

data/accounts.txt

Format:

AccountNumber|CustomerID|AccountType|Balance|Active

Example:

10000001|1001|SAVINGS|50000.00|1

### Fields

| Field | Description |
|---|---|
| AccountNumber | Unique account number |
| CustomerID | Owner customer ID |
| AccountType | SAVINGS or CURRENT |
| Balance | Current account balance |
| Active | Account status |

---

## 5. Transactions

File:

data/transactions.txt

Format:

TransactionID|Type|FromAccount|ToAccount|Amount|Date|Status

Example:

1|DEPOSIT|0|10000001|5000.00|2026-08-13|Completed

### Fields

| Field | Description |
|---|---|
| TransactionID | Unique transaction ID |
| Type | DEPOSIT, WITHDRAW or TRANSFER |
| FromAccount | Source account |
| ToAccount | Destination account |
| Amount | Transaction amount |
| Date | Transaction date |
| Status | Transaction status |

---

## 6. Relationships

The basic relationship between the data is:

Customer
    |
    | 1
    |
    | many
    v
Account
    |
    | 1
    |
    | many
    v
Transaction

A customer can have multiple accounts.

An account can have multiple transactions.

---

## 7. Data Flow

Customer creation:

User
  ↓
Frontend
  ↓
C++ Backend
  ↓
Customer Manager
  ↓
customers.txt

Account creation:

User
  ↓
Frontend
  ↓
C++ Backend
  ↓
Account Manager
  ↓
accounts.txt

Transaction:

User
  ↓
Frontend
  ↓
C++ Backend
  ↓
Transaction Manager
  ↓
transactions.txt