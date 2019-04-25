var students = require("./students.json");

const filterStudents = branch => {
  let filteredStudents = students.filter(
    s => s.branchName == branch.toUpperCase()
  );
  return filteredStudents;
};

module.exports.filterStudents = filterStudents;
