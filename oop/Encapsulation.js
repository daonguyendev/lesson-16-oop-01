class Student {
    id;
    name;
    age;
    clazz;

    constructor(id, name, age, clazz) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.clazz = clazz;
    }

    get getAge() {
        return this.age;
    }

    set setAge(age) {
        if (age > 0) {
            this.age = age;
        } else {
            console.log("Your input is not valid");
        }
    }

    //Các getter/setter còn lại tương tự
}

function main() {
    let studentA = new Student(1, "Tý", 17, "C06");
    let studentB = new Student(2, "Tèo", 18, "C06");

    // Violate encapsulation property in OOP
    // console.log(studentA.age);
    // studentA.age = -20;
    // console.log(studentA.age);

    // Ensure encapsulation property in OOP
    console.log(studentA.getAge);
    studentA.setAge = -20;
    console.log(studentA.getAge);
}

main();