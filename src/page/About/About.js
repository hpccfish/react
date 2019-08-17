import React, { Component } from "react";
import withLayout from "../../lib/withLayout";
import axios from "axios";

class About extends Component {
  componentDidMount = async () => {
    //this.syncFunction();
    //await this.asyncFunction();
    //const c = "#3";
    //console.log(c);
    const a = await this.syncFunctionModify();
    const b = "#2";
    console.log(b);
  };

  syncFunction = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(function(response) {
        // handle success
        const a = "#1";
        console.log(a);
      })
      .catch(function(error) {
        // handle error
        //console.log(error);
      })
      .finally(function() {
        // always executed
      });
    const b = "#2";
    console.log(b);
  };

  syncFunctionModify = async () => {
    return axios
      .get("https://reqres.in/api/users?page=2")
      .then(function(response) {
        // handle success
        const a = "#1";
        console.log(a);
        return a;
      })
      .catch(function(error) {
        // handle error
        //console.log(error);
        return;
      })
      .finally(function() {
        // always executed
        return;
      });
  };

  asyncFunction = async () => {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    const a = "#1";
    console.log(a);
    const b = "#2";
    console.log(b);
  };

  render() {
    return <div>About</div>;
  }
}

export default withLayout(About);
