//? so about interface huh? what i have learned is that it acts as a guard that first checks ...whether it has the following needed properties or not and we can use the available resources if it's correct.
var Admin = /** @class */ (function () {
    function Admin(name, email) {
        this.name = name;
        this.email = email;
    }
    Admin.prototype.login = function () {
        console.log('this is the admin logged in');
    };
    return Admin;
}());
var user = /** @class */ (function () {
    function user(name, email) {
        this.name = name;
        this.email = email;
    }
    user.prototype.login = function () {
        console.log('this is the user logged in');
    };
    return user;
}());
var user1 = new user('prajwol', 'shresthaprajwol161@gmail.com');
var admi = new Admin('Praju', "stha@gmail.com");
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.login = function (user) {
        user.login();
    };
    return Auth;
}());
Auth.login(user1);
Auth.login(admi);
