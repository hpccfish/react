import React, { Component } from "react";
import HomeFirstDiv from "../../component/HomeFirstDiv";
import withLayout from "../../lib/withLayout";

class Home extends Component {
  _name = "Jack";
  constructor(props) {
    super(props);
    this.state = { age: 40 };
  }

  setAge = ({ age }) => {
    this.setState({ age });
  };

  render() {
    return (
      <div>
        <h5>{this._name}</h5>
        <h5>{this.state.age}</h5>
        <HomeFirstDiv setAge={this.setAge} myname={this._name} />
      </div>
    );
  }
}

export default withLayout(Home);
