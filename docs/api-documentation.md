# API Documentation

## 1. Overview

The Banking Management System will use an HTTP-based API to allow
the JavaScript frontend to communicate with the C++ backend.

Current status:

Planned / Under Development

---

# 2. Authentication API

## POST /api/login

Used to authenticate a user.

### Request

```json
{
    "username": "admin",
    "password": "admin123"
}