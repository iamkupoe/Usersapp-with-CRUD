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
          <label htmlFor=""  className="label-html" style={{ fontSize: "18px", display: 'inlineBlock', textAlign:'left' }}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="input-html"
            placeholder=""
            value={this.state.name}
            onChange={this.handleChange}
            style={{ width: "200px", height: "30px", borderRadius: "4px", display: 'inlineBlock'}}
          />
          <br />
          <label htmlFor="" className="label-html" style={{ fontSize: "18px", display: 'inlineBlock' }}>
            Number:
          </label>
          <input
            type="number"
            name="number"
            placeholder=""
            value={this.state.number}
            onChange={this.handleChange}
            style={{ width: "200px", height: "30px", borderRadius: "4px", display: 'inlineBlock' }}
          />
          <br />
          <label htmlFor="" style={{ fontSize: "18px", display: 'inlineBlock' }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="input-html"
            placeholder=""
            value={this.state.email}
            onChange={this.handleChange}
            style={{ width: "200px", height: "30px", borderRadius: "4px", display: 'inlineBlock' }}
          />
          <br />
          <button
            type="SUBMIT"
            style={{
              width: "5rem",
              color: "white",
              marginLeft: "5rem",
              marginTop: "-3rem",
              backgroundColor: "blue",
              borderRadius: "1rem",
            }}
          >
            Add User
          </button> 
          <hr style={{marginRight:'2rem'}} />
        </form>
      </div>
    );
  }
}
export default UserForm;
