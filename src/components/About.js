import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {},
    };

    // console.log("Parent CONSTRUCTOR called");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/aakashnarwade");
    const json = await data.json();
    // console.log(json);
    this.setState({
      info: json,
    });

    // console.log("Parent did mount");
  }
  render() {
    const { name, avatar_url, location } = this.state.info;
    // console.log("Parent RENDER called");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Course</h2>
        <div>
          <UserContext.Consumer>
            {(data) => console.log(data)}
          </UserContext.Consumer>
        </div>
        <h2>{name}</h2>
        <h2>{location}</h2>
        {/* <img src={avatar_url} alt="imggg" /> */}

        {/* <User name={name} location={location} />
            <UserClass name={name} location={location} /> */}
      </div>
    );
  }
}

export default About;

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Course</h2>
//       <User name={"aaaaakkk"} />
//       <UserClass name={"class based props aaaaakkk"} location={"Mumbai"} />
//     </div>
//   );
// };

// export default About;
