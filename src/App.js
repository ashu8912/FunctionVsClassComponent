import React from "react";
import "./styles.css";
import ProfilePageFunction from "./ProfileWithFunction";
import ProfilePageClass from "./ProfileWithClass";

export default class App extends React.Component {
  state = {
    user: "Ashu"
  };
  setUser = value => {
    this.setState({ user: value });
  };
  render() {
    return (
      <div className="App">
        <h4>
          Try Clicking the Follow Button And Than At The Same Time Switch The
          Select To Some user,you will experience that in case of function
          component the render value is captured but not in case of class
          Component
        </h4>
        <select
          value={this.state.user}
          onChange={e => this.setUser(e.target.value)}
        >
          <option value="Dan">Dan</option>
          <option value="Ashu">Ashu</option>
          <option value="Sara">Sara</option>
        </select>
        <br />
        <h2>
          <ProfilePageFunction user={this.state.user} />
          (Function)
        </h2>
        <br />
        <h2>
          <ProfilePageClass user={this.state.user} />
          (Class)
        </h2>
      </div>
    );
  }
}
