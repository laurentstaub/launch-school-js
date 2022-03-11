function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [], // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]

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

let foo = createStudent('Foo', '1st');
foo.info(); // "Foo is a 1st year student"
foo.listCourses(); // [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses()); // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
console.log(foo.listCourses());
foo.viewNotes(); // "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"