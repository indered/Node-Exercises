import React, { Component } from "react";
import { StyledSearchBar } from "./searchBar";
class SearchBar extends Component {
  state = {
    text: ""
  };

  startSearch = () => {
    this.state.text.length > 2
      ? this.props.fetchUsers(this.state.text)
      : this.props.clearUsers();
  };
  handleChange = e => {
    this.setState(
      {
        text: e.target.value
      },
      this.startSearch
    );
  };

  render() {
    let { users } = this.props;
    return (
      <React.Fragment>
        <StyledSearchBar className="search_bar">
          <input
            onChange={this.handleChange}
            value={this.state.text}
            type="text"
          />

          <ul className="search-data">
            {users.map(u => {
              return <li key={u}>{u}</li>;
            })}
          </ul>
        </StyledSearchBar>
      </React.Fragment>
    );
  }
}
export default SearchBar;
