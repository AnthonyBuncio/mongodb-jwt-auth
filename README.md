cd mongodb-jwt-auth
cd server
npm install

Change default.json options in server/config with MongoDB connect string and JSONWebToken secret

/user
Registers a new user with email & password.

/auth
Login registered users. Returns JWT token for authentication
