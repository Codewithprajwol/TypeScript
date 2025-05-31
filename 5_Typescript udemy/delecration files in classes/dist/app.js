import { AdminUser } from "./user.js";
const userAdmin = new AdminUser();
userAdmin.createUser("bob");
console.log(userAdmin)
userAdmin.showGreeting();
