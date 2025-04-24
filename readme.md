# Backend API Documentation

## POST /users/register

This endpoint registers a new user.

### Description
- **Endpoint:** `/users/register`
- **Method:** `POST`
- **Purpose:** Creates a new user account in the system.

### Request Payload
The request body must be sent as JSON with the following structure:
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "strongpassword"
}

fullname.firstname: Required, minimum 3 characters.
fullname.lastname: Required, minimum 3 characters.
email: Required, must be a valid email format.
password: Required, minimum 6 characters.
```

### Response Payload
The response body will be sent as JSON with the following structure:
```json
{
    "token": "generatedTokenHere",
    "user": {
        // User object data
    }
}
```

### Error Response
The error response body will be sent as JSON with the following structure:
```json
{
    "errors": [
        {
            "msg": "Error message",
            "param": "fieldName",
            "location": "body"
        }
        // ...additional error objects if any
    ]
}
```