// Cách 1: Khai báo lớp
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;

  this.setAge = function (age) {
    this.age = age;
  };
}

// Cách 1.1: Khởi tạo đối tượng
let myFather = {};
console.log(myFather);

// Cách 1.2: Khởi tạo đối tượng
let myMother = {firstName: "Phạm Thị", lastName: "Mẹ", age: 49, eyeColor: "Đen"};
console.log(myMother);
myMother.age = 45;
console.log(myMother);

// Cách 1.3 (Khuyến khích xài hơn): Khởi tạo đối tượng từ lớp Person
let myBrother = new Person("Nguyễn Văn", "Tèo", 19, "Đen");
console.log(myBrother);
myBrother.setAge(20);
console.log(myBrother);

