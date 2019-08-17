import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class HomeFirstDiv extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.setAge({ age: 75 });
          }}
        >
          Change name to Anthony
        </button>
        <h1>{this.props.myname}</h1>
        <h2>Build amazing things</h2>
        <p>
          Essential JavaScript development tools that help you go to market
          faster and build powerful applications using modern open source code.
        </p>
        <button>JOIN</button>
        <p>
          Open source power, superior safety and collaboration. npm Enterprise
          now offers package filtering, SSO & vulnerability reporting features,
          making enterprise Javascript more secure & streamlining the developer
          experience.
        </p>
        <Alert variant={"warning"}>test</Alert>
      </div>
    );
  }
}

export default HomeFirstDiv;
