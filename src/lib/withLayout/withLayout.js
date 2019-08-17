import React from "react";
import { Link } from "react-router-dom";

function withLayout(BaseComponent) {
  class App extends React.Component {
    componentDidMount() {}

    render() {
      return (
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <BaseComponent />
        </div>
      );
    }
  }

  return App;
}

export default withLayout;
