/*
addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
*/

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info: function info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses: function listCourses() {
      return this.courses;
    },

    addCourse: function addCourse(object) {
      this.courses.push(object);
    },

    addNote: function addNote(courseCode, note) {
      this.courses.forEach(function (course) {
        if (course.code === courseCode) {
          if (course.note === undefined) {
            course.note = [note];
          } else {
            course.note.push(note);
          }
        }
      });
    },

    updateNote: function updateNote(courseCode, note) {
      this.courses.forEach(function(course) {
        if (course.code === courseCode) {
          course.note = [note];
        }
      });
    },

    viewNotes: function viewNotes() {
      this.courses.forEach(function (course) {
        if (course.note) console.log(`${course.code}: ${course.note.join('; ')}`);
      });
    },
  }
}

function createSchool() {
  return {
    students: [],

    addStudent: function addStudent(name, year) {
      const authorizedYears = ['1st', '2nd', '3rd', '4th', '5th'];

      if (authorizedYears.includes(year)) {
        this.students.push(createStudent(name, year));
      } else {
        console.log('Invalid year');
      }
    },

    enrollStudent: function enrollStudent(studentName, courseObject) {
      this.students.forEach(function (student) {
        if (student.name === studentName) {
          student.addCourse(courseObject);
        }
      });
    },

    addGrade: function addGrade(studentName, courseName, grade) {
      this.students.forEach(function(student) {
        if (student.name === studentName) {
          student.courses.forEach(function (course) {
            if (course.name === courseName) course.grade = grade;
          });
        }
      });
    },

    getReportCard: function getReportCard(studentName) {
      this.students.forEach(function(student) {
        if (student.name === studentName) {
          student.courses.forEach(function (course) {
            if (course.grade !== undefined) console.log(`${course.name}: ${String(course.grade)}`);
            else console.log(`${course.name}: In progress`);
          });
        }
      });
    },

    courseReport: function courseReport(courseName) {
      let studentAndGrade = [];

      this.students.forEach(function (student) {
        student.courses.forEach(function (course) {
          if (course.name === courseName) studentAndGrade.push(`${student.name}: ${course.grade}`);
        });
      });

      console.log('');
      console.log(`== ${courseName} ==`);
      studentAndGrade.forEach(function(studentGrade) {
        console.log(studentGrade);
      });
    },
  }
}

let school = createSchool();
school.addStudent('Laurent', '1st');
school.addStudent('John', '1st');
school.enrollStudent('Laurent', { name: 'Math', code: 101});
school.enrollStudent('Laurent', { name: 'JS101', code: 102});
school.enrollStudent('John', { name: 'Math', code: 101});
school.addGrade('Laurent', 'Math', 92);
school.addGrade('John', 'Math', 90);
console.log(school.students);
console.log(school.students[0].courses);
school.getReportCard('Laurent');
school.courseReport('Math');