import React, { Component } from "react";

export default class Home extends Component {
  state = {
    users: [],
    isLoading: true
  };

  componentDidMount() {
    let url = `http://localhost:3001/users`;
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(result => {
        this.setState(
          {
            users: result,
            isLoading: false
          },
          () => console.log(result)
        );
      });
  }

  handleRemove = id => {
    let url = `http://localhost:3001/users/delete/${id}`;
    fetch(url, {
      method: "DELETE"
    })
      .then(res => {
        return res.json();
      })
      .then(result =>
        this.setState(
          {
            users: result,
            isLoading: false
          },
          () => console.log(result)
        )
      );
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.state.isLoading ? (
          <div>Loading Users... Wait a sec!</div>
        ) : (
          <table>
            <tbody>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>remove </th>
              </tr>
              {this.state.users.map(u => {
                return (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    <td>
                      <i
                        className="fas fa-trash delete"
                        onClick={() => this.handleRemove(u.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
