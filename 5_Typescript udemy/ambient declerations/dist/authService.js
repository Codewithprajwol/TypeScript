"use strict";
window.AuthService = {
    currentUser: null,
    login(username, password) {
        if (username === "user" && password =="password123") {
            this.currentUser = { id: 1, username };
            console.log("login successful");
            return true;
        }
        else {
            console.log('login failed!');
            return false;
        }
    },
    isLoggedIn() {
        return this.currentUser !== null;
    }
};
