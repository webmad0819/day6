class Student {
  constructor(name, surname, bootcamp, grades) {
    if (grades.length === 0) {
      throw new Error("You must provide at least one grade");
    }

    this.name = name;
    this.surname = surname;
    this.bootcamp = bootcamp;
    this.grades = grades;
  }

  _formatAverage(longAverage) {
    return +longAverage.toFixed(2);
  }

  // this is a Student's class method
  getAverage() {
    let acum = 0;

    for (var i = 0; i < this.grades.length; i++) {
      acum += this.grades[i];
    }

    const average = this._formatAverage(acum / this.grades.length);

    return average;
  }

  getAverageWithReducer() {
    //[10, 7, 8]
    let output = this._formatAverage(
      this.grades.reduce((ac, cu) => ac + cu, 0) / this.grades.length
    );

    return output;
  }
}

// let myReport = new StudentReportPainter(students);
class StudentReportPainter {
  constructor(students) {
    this.studentsOfThisClass = students;
  }

  paintGeneric() {
    const bodyDOMEl = document.body;

    this.studentsOfThisClass.forEach(student => {
      let studentDOMEl = document.createElement("div");
      studentDOMEl.className = "student";

      studentDOMEl.innerHTML = `
                <span>Name: ${student.name}</span>
                <span>Surname: ${student.surname}</span>
                <span>Bootcamp: ${student.bootcamp}</span>
                <span>Average: ${student.getAverageWithReducer()}</span>
                `;

      bodyDOMEl.appendChild(studentDOMEl);
    });
  }

  paintOnlyNames() {
    this.studentsOfThisClass.forEach(student => {
      let bodyDOMEl = document.body;
      let studentDOMEl = document.createElement("div");
      studentDOMEl.className = "student";

      studentDOMEl.innerHTML = `
                <span>Name: ${student.name}</span>
                `;

      bodyDOMEl.appendChild(studentDOMEl);
    });
  }
}

// adding elements to the array, way #1, my fav :)

// this is a 2D array
let students = [
  [
    new Student("Borja", "Bernardez", "webmad0819", [10, 10, 8]),
    new Student("Fernando", "De la Torre", "webmad0819", [9, 9, 6])
  ],
  [
    new Student("Germán 1", "Apellido 1", "webmad0719", [7, 7, 8, 9]),
    new Student("Germán 2", "Apellido 2", "webmad0719", [7, 7, 8, 9]),
    new Student("Germán 3", "Apellido 3", "webmad0719", [7, 7, 8, 9])
  ]
];

// let fernandoAverage = students[1].getAverage();

// all averages invocation
// students.forEach(student => student.getAverage());

// let myReport = new StudentReportPainter(students);
// myReport.paintOnlyNames();

// adding elements to the array, way #2
// let students = []
// students.push(new Student("Borja", "Bernardez", "webmad0819", [10, 10, 8]))
// students.push(new Student("Fernando", "De la Torre", "webmad0819", [9, 9, 10]))

// adding elements to the array, way #3, ugly :(
// let borja = new Student("Borja", "Bernardez", "webmad0819", [10, 10, 8]);
// let fernando = new Student("Fernando", "De la Torre", "webmad0819", [9, 9, 10]);
// let students = [
//     borja,
//     fernando
// ]

// adding elements to the array, way #4
// let students = []
// students[0] = new Student("Borja", "Bernardez", "webmad0819", [10, 10, 8]),
// students[1] = new Student("Fernando", "De la Torre", "webmad0819", [9, 9, 10])

// adding elements to the array, way #5
// let students = []
// students["0bfc0203023023"] = new Student("Borja", "Bernardez", "webmad0819", [10, 10, 8]),
// students["0bfc0203023025"] = new Student("Fernando", "De la Torre", "webmad0819", [9, 9, 10])

console.log(students);
