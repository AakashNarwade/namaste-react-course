import React from "react";
import ReactDOM from "react-dom/client";


const Title = () =>{

 return  <h1 className="head" tabIndex="5">
    Namaste React using JSX 
  </h1>
}



const HeadingComponent = () =>{
 return ( <div id="container">
    <h1 className="heading">
      Namaste React Fucntional Component
    </h1>
    <Title/>
  </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "child1h1"),
//     React.createElement("h2", {}, "child1h2"),
//     React.createElement("h2", {}, "namaste react"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "child2h1"),
//     React.createElement("h2", {}, "child2h2"),
//   ]),
// ]);
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
