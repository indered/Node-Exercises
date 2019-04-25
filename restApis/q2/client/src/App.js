import React from "react";
import StudentTable from "./studentTable";
import "./App.css";

class App extends React.Component {
  state = {
    students: []
  };

  fetchStudents = branch => {
    let url = "";

    branch
      ? (url = `http://localhost:3000/students/${branch}`)
      : (url = "http://localhost:3000/");

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        this.setState({
          students: result
        });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>
          Select the branch name to filter the students according to their
          branches.
        </h1>
        <StudentTable
          students={this.state.students}
          fetchStudents={this.fetchStudents}
        />
      </div>
    );
  }
}

export default App;
