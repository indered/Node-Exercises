import React, { Component } from "react";
import FilterDropDown from "./filterDropDown";

export default class StudentTable extends Component {
  render() {
    let { students, fetchStudents } = this.props;
    console.log(students);
    return (
      <React.Fragment>
        <FilterDropDown fetchStudents={fetchStudents} />
        <ul className="table">
          <li className="table-head">
            <h2>ID</h2>
            <h2>NAME</h2>
            <h2>BRANCH</h2>
            <h2>USERNAME</h2>
            <h2>EMAIL</h2>
            <h2>PASSWORD</h2>
          </li>
          {students.map(s => (
            <li>
              <h3>{s.id}</h3>
              <h3>
                {s.name.firstName} {s.name.lastName}
              </h3>
              <h3>{s.branchName}</h3>
              <h3>{s.username}</h3>
              <h3>{s.email}</h3>
              <h3>{s.password}</h3>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
