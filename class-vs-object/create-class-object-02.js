// Khai báo lớp (cách 2)
class Person {
  firstName;
  lastName;
  age;
  eyeColor;

  constructor(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
  }

  get getAge() {
    return this.age;
  }

  set setAge(age) {
    this.age = age;
  };
}

//Khởi tạo đối tượng từ lớp Person (cách 2) (Rất khuyến khích xài)
let student1 = new Person("Nguyễn Văn", "Tèo", 18, "Đen");
let student2 = new Person("Trần Lê", "Tý", 19, "Đen");
console.log(student1);
console.log(student1.getAge());
console.log(student2);
console.log(student2.getAge());
