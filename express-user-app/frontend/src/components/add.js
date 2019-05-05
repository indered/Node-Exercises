import React, { Component } from "react";

export default class Add extends Component {
  state = {
    newUser: {
      id: "",
      name: "",
      username: "",
      email: ""
    },
    submitted: false
  };

  componentDidMount() {
    this.setState({
      submitted: false
    });
  }

  add = (e, user) => {
    console.log(user);
    e.preventDefault();
    let url = `http://localhost:3001/users/add`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.toggleSubmit();
      });
  };

  toggleSubmit = () => {
    if (!this.state.submitted) {
      this.setState({
        newUser: {
          id: "",
          name: "",
          username: "",
          email: ""
        },
        submitted: true
      });
    }
  };

  handleChange = e => {
    let user = { ...this.state.newUser };
    user[e.target.name] = e.target.value;
    this.setState({
      newUser: user
    });
  };

  render() {
    return (
      <React.Fragment>
        <form
          className="addUserForm"
          onSubmit={e => this.add(e, this.state.newUser)}
        >
          <label>Id</label>
          <input
            onChange={this.handleChange}
            value={this.state.newUser.id}
            type="number"
            name="id"
            placeholder="id"
          />

          <label>Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.newUser.name}
            type="text"
            name="name"
            placeholder="name"
          />

          <label>username</label>
          <input
            onChange={this.handleChange}
            value={this.state.newUser.username}
            type="text"
            name="username"
            placeholder="username"
          />

          <label>email</label>
          <input
            onChange={this.handleChange}
            value={this.state.newUser.email}
            type="email"
            name="email"
            placeholder="email"
          />

          <input type="submit" name="Submit" placeholder="id" />
        </form>
        {(() => {
          if (this.state.submitted)
            return <h4>user added! go to home to view!</h4>;
        })()}
      </React.Fragment>
    );
  }
}
