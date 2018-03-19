"use strict";
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello111, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jan2", "M.", "User11222");
var s = new Student('m', 'dd', 'moi');
window.onload = function () {
    document.body.innerHTML = greeter(user);
    document.body.innerHTML = greeter(s);
};
