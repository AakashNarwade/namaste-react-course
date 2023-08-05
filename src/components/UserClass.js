import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log("Child CONSTRUCTOR called");
  }

  componentDidMount() {
    // console.log("Child did mount");
  }

  render() {
    // console.log("Child RENDER called");

    const { count, count2 } = this.state;
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>Class based component</h2>
        <h3>Name:{name}</h3>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
