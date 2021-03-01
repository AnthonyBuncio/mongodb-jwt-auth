# MongoDB JWT User Auth

## Install

```
$ cd mongodb-jwt-auth
$ cd server
$ npm install
```

## MongoDB config & JWT secret string

Server connection is located at **default.json** in the **server/config** folder. **"mongoURI"** is the connection string to your MongoDB. **"jwtSecret"** can be any combination of letters and numbers, defaulted to `000000000`. It is already included in all necessary files as a variable.

```
{

"mongoURI": "Enter connection string here",
"jwtSecret": "Enter JWT secret"

}
```

## API Routes

`/user` POST
Registers a new user to your database.

`/auth` POST
Login a registered user.

`/auth` GET
Returns the JSONWebToken used to authenticate user.
