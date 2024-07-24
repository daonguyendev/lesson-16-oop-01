function person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;

  this.changeName = function (name) {
    this.lastName = name;
  };
}

let myFather = new person("Nguyễn Văn", "Ba", 50, "Đen");
let myMother = new person("Trần Thị", "Mẹ", 48, "Đen");

console.log(myFather);
console.log(myMother);

myMother.changeName("Mẹ Tui");
console.log(myMother);
