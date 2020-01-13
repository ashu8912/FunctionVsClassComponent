import React from "react";
function ProfilePageFunction(props) {
  const setFollow = () => {
    setTimeout(() => alert(`followed ${props.user}`), 3000);
  };
  return <button onClick={setFollow}>Follow</button>;
}

export default ProfilePageFunction;
