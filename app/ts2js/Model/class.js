"use strict";
var User = (function () {
    function User() {
    }
    User.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.prototype.isKid = function () {
        return this.age < 18;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=class.js.map