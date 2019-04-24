import React from "react";
import Searchbar from "./search";
import "./App.css";

class App extends React.Component {
  state = {
    users: []
  };

  fetchUsers = name => {
    fetch(`http://localhost:3000/users/${name}`, {
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
          users: result
        });
      });
  };

  clearUsers = () => {
    this.setState({
      users: []
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Type in the search for the user</h1>
        <Searchbar
          users={this.state.users}
          fetchUsers={this.fetchUsers}
          clearUsers={this.clearUsers}
        />
      </div>
    );
  }
}

export default App;
