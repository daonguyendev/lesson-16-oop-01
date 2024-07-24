function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;

  this.changeName = function (name) {
    this.lastName = name;
  };
}

let myFather = new Person("Nguyễn Văn", "Tý", 50, "Đen");
let myMother = new Person("Trần Văn", "Tèo", 48, "Đen");

console.log(myFather);
console.log(myMother);
