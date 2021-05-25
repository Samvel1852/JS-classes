// Write classes: Person class and Student class. Person should have:

class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (/^[A-z]+$/.test(value)) {
      this._firstName = value;
    } else {
      throw new Error("name must include only letters");
    }
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (/^[A-z]+$/.test(value)) {
      this._lastName = value;
    } else {
      throw new Error("name must include only letters");
    }
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    if (value === "male" || value === "female") {
      this._gender = value;
    } else {
      throw new Error("gender is not valid gender");
    }
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (!Number.isNaN(value)) {
      this._age = Number(value);
    } else {
      throw new Error("age must include only numbers");
    }
  }

  toString() {
    return `${this.firstName} ${this.lastName}, ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, gender, age, year, fee, program) {
    super(firstName, lastName, gender, age);
    this.year = year;
    this.fee = fee;
    this.program = program;
  }

  passExam(programNameArg, gradeArg) {
    this.program.forEach((prog) => {
      if (prog.programName === programNameArg) {
        prog.grade = gradeArg;
      }
    });
  }

  isAllPassed() {
    if (this.program.every((prog) => prog.grade >= 50)) {
      this.year += 1;
    }
  }
}

let karen = new Person("Karen", "Balyan", "male", 25);

console.log(karen.toString());
console.log(karen.firstName, karen.lastName, karen.gender, karen.age);
// karen.firstName = "dffsd";

let narekStudent = new Student("Narek", "Gagyan", "male", 22, 2, 200000, [
  { programName: "Math", grade: 55 },
  { programName: "Chemistry", grade: undefined },
]);

// console.log(narekStudent);
narekStudent.passExam("Chemistry", 81);
console.log(narekStudent);
narekStudent.isAllPassed();
console.log(narekStudent);
