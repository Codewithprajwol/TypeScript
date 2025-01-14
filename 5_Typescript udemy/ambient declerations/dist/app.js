"use strict";
const user = AuthService.login("user", "password123");
if (AuthService.isLoggedIn()) {
    console.log("user is logged in");
}
else {
    console.log('loggedin in failed');
}
