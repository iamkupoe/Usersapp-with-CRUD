import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      email: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("from userForm", this.state)
    const newUser = {
      name: this.state.name,
      number: this.state.number,
      email: this.state.email
    };
    this.props.addUser(newUser);
    this.setState({
      name: "",
      number: "",
      email: "",
    });
  };

  render() {
    return (
      <div className="text-primary txt">
        <h2 className="text">Users Form</h2>
        <form
          onSubmit={this.handleSubmit}
          style={{
            marginTop: "15px",
            backgroundColor: "#a3ffb6",
            width: "300px",
            height: "70vh",
            marginLeft: "0",
            paddingLeft: "40px",
            paddingTop: "20px",
            fontSize: "15px",
            borderRadius: "2rem",
          }}
        >
          <label htmlFor="" style={{ fontSize: "18px" }}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder=""
            value={this.state.name}
            onChange={this.handleChange}
            style={{ width: "200px", height: "30px", borderRadius: "4px" }}
          />
          <br />
          <label htmlFor="" style={{ fontSize: "18px" }}>
            Number:
          </label>
          <input
            type="number"
            name="number"
            placeholder=""
            value={this.state.number}
            onChange={this.handleChange}
            style={{ width: "200px", height: "30px", borderRadius: "4px" }}
          />
          <br />
          <label htmlFor="" style={{ fontSize: "18px" }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder=""
            value={this.state.email}
            onChange={this.handleChange}
            style={{ width: "200px", height: "30px", borderRadius: "4px" }}
          />
          <br />
          <button
            type="SUBMIT"
            style={{
              width: "100px",
              color: "white",
              borderRadius: "5px",
              marginLeft: "50px",
              height: "30px",
              backgroundColor: "blue",
              fontSize: "18px",
              borderRadius: "2rem",
            }}
          >
            Add User
          </button>
        </form>
      </div>
    );
  }
}
export default UserForm;
