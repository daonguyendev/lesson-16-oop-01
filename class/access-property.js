let person = { fname: "Trần Quang", lname: "Thành", age: 25 };
// let txt = "";

// for (let x in person) {
//   txt += person[x];
// }

console.log(person.lname); // "Thành"
console.log(person["lname"]); // "Thành"

// console.log(txt);

let person2 = { "first-name": "Trần Quang", "last-name": "Thành", age: 25 };
// console.log(person2.last-name); // "Thành"
console.log(person2["last-name"]); // "Thành"
