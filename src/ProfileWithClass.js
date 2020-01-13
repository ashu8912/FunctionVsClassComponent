import React from "react";
class ProfilePageClass extends React.Component {
  setFollow = () => {
    setTimeout(() => alert(`Followed ${this.props.user}`), 3000);
  };
  render() {
    return <button onClick={this.setFollow}>Follow</button>;
  }
}
export default ProfilePageClass;
