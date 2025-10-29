// This pattern allows us to create object clones
// creating a new project using previously created objects as a template

var schoolPrototype = {
  init: function(name,numStudents){
    this.name = name,
    this.numStudents = numStudents
  },
  enrollStudent: function (studentName) {
    console.log("Enrolling Student:", studentName, "in", this.name);
  },

  conductClass: function (className) {
    console.log("Conducting Class:", className, "in", this.name);
  },
};

function createSchool(name, numStudents){
    function school(){
       
    };
     school.prototype = schoolPrototype;
        var newSchool = new school();
        newSchool.init(name, numStudents);
        return newSchool
}

