# Description

A simple API to perform CRUD operation

# Technologies used:

1. Node.js
2. Express
3. Mongoose

# Setup

1. run `npm install` to install all the required dependencies
2. Create an `.env` file and Add the following variables
   `MONGODB_URL=<yourMongoDB_URL>`
   `PORT=3000` or any port of your choice
3. run `npm run start`

# Usage.

Navigate to `localhost:3000/` (port that you assigned earlier) on the browser and you should see the below message

```json
{
    "message": "Success"
}
```

## List users

`/users` will return all the users data stored on your database.

## List by type

`/users/type/<Type>` will list all the users of the specified type. eg. `users/type/Free`

## List user details

`/user/<userID>` will list details of the user whose ID is specified.

## Create a new user

`/user/new` will need the request body to be passed for creating the new user. Format of the body

```json
{
    "newUser": {
        "name": "Your name",
        "email": "someone@example.com",
        "phone": 1234567890,
        "type": "Free"
    }
}
```

## Update user details

`/user/update/<userID>` will too require the data to be passed from the request body as follows.

```json
{
    "userData": {
        "key": "newValue"
    }
}
```

## Delete a user

`/user/delete/<userID>` let's you delete a user from the database.

## Delete users by type

`/user/delete/type/<type>` let's you delete all the users of the given type from the database.
