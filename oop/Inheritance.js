class Person {
    id;
    name;
    age;

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    get getId() {
        return this.id;
    }

    set setId(id) {
        this.id = id;
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }

    get getAge() {
        return this.age;
    }

    set setAge(age) {
        this.age = age;
    }

    //Các getter/setter còn lại tương tự
}

class Student extends Person {
    clazz;

    constructor(id, name, age, clazz) {
        super(id, name, age);
        this.clazz = clazz;
    }

    get getClazz() {
        return this.clazz;
    }

    set setClazz(clazz) {
        this.clazz = clazz;
    }
}

function main() {
    let studentF1 = new Person(1, "Tý", 18);
    let studentF2 = new Student(studentF1.getId, studentF1.getName,
                                studentF1.getAge, "C06");

    // Ensure encapsulation property in OOP
    console.log(studentF1);
    console.log(studentF2);
}

main();