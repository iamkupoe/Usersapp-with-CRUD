import React, { Component } from "react";
import { connect } from "react-redux";
import { editUser } from "../store/usersActions";

export class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      number: props.user.number,
      email: props.user.email
    };
    this.id = props.match.params.id;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      name: this.state.name,
      number: this.state.number,
      email: this.state.email
    };
    this.props.editUser(this.id, updatedInfo);
    this.setState({
      name: "",
      number: "",
      email: ""
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="App user-form"
        style={{
          marginTop: "15px",
          backgroundColor: "#a3ffb6",
          width: "300px",
          height: "100vh",
          marginLeft: "0",
          paddingLeft: "40px",
          paddingTop: "100px",
          fontSize: "15px",
        }}
      >
        <label htmlFor="" style={{ fontSize: "18px" }}>
          Name:
        </label>
        <input
          type="text" name="name"
          placeholder=""
          value={this.state.name}
          onChange={this.handleChange}
          style={{ width: "200px", height: "30px", borderRadius: "4px" }}
        />
        <br />
        <br />
        <label htmlFor="" style={{ fontSize: "18px" }}>
          Number:
        </label>
        <input
          type="number" name="number"
          placeholder=""
          value={this.state.number}
          onChange={this.handleChange}
          style={{ width: "200px", height: "30px", borderRadius: "4px" }}
        />
        <br />
        <br />
        <label htmlFor="" style={{ fontSize: "18px" }}>
          Email:
        </label>
        <input
          type="email" name="email"
          placeholder=""
          value={this.state.email}
          onChange={this.handleChange}
          style={{ width: "200px", height: "30px", borderRadius: "4px" }}
        />
        <br />
        <br />
        <div>
          <button
            type="SUBMIT"
            style={{
              backgroundColor: "blue",
              color: "black",
              borderRadius: "1rem",
            }}
          >
            Update User
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find((user) => user.id === ownProps.match.params.id),
});

const mapDispatchToProps = {
  editUser: editUser
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
