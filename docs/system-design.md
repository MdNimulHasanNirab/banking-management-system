# Banking Management System
## System Design Document

---

## 1. Introduction

The Banking Management System is a software project designed to manage
basic banking operations through a web-based interface.

The system provides modules for authentication, customer management,
account management, transactions, and fund transfers.

---

## 2. Objectives

The main objectives are:

- Manage bank customers
- Create and manage accounts
- Perform deposits
- Perform withdrawals
- Perform fund transfers
- Maintain transaction records
- Provide a dashboard
- Provide authentication
- Store banking information
- Provide a user-friendly interface

---

## 3. System Architecture

The system follows a frontend-backend architecture.

### Frontend

The frontend is developed using:

- HTML
- CSS
- JavaScript

### Backend

The backend is developed using:

- C++

### Data Storage

The current version uses text files for data storage.

---

## 4. System Structure

```text
User
 |
 v
Frontend
 |
 | HTTP Request
 v
C++ Backend
 |
 +-- Authentication
 |
 +-- Customer Management
 |
 +-- Account Management
 |
 +-- Transaction Management
 |
 +-- Transfer Management
 |
 v
Data Storage