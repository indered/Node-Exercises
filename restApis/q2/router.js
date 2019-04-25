var filterStudents = require("./studentList").filterStudents;
var students = require("./students.json");

function home(request, response) {
  //if url == '/'
  if (request.url === "/" || request.url === "/students") {
    response.end(JSON.stringify(students));
  }
}

//Handle HTTP route GET /:username
function student(request, response) {
  var branch = request.url.replace("/students/", "");
  if (branch.length > 0) {
    let students = filterStudents(branch);
    response.end(JSON.stringify(students));
  }
}

module.exports.student = student;
module.exports.home = home;
