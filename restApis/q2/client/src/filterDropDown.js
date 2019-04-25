import React, { Component } from "react";

class FilterDropDown extends Component {
  state = {
    branch: ""
  };

  componentDidMount() {
    this.props.fetchStudents();
  }

  handleOnChange = event => {
    this.setState(
      {
        branch: event.target.value
      },
      () =>
        this.state.branch === "All"
          ? this.props.fetchStudents()
          : this.props.fetchStudents(this.state.branch)
    );
  };
  render() {
    return (
      <div>
        <form>
          <select
            value={this.state.option}
            onLoad={this.handleOnChange}
            onChange={this.handleOnChange}
          >
            <option value="All" selected>
              All
            </option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
          </select>
        </form>
      </div>
    );
  }
}

export default FilterDropDown;
