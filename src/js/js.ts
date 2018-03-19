class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello111, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jan2", "M.", "User11222");
let s = new Student('m', 'dd', 'moi')




window.onload = function () {
  document.body.innerHTML = greeter(user);
  document.body.innerHTML = greeter(s);
}
