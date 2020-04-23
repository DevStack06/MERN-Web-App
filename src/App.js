import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import User from "./componants/user/user";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//     </div>
//   );
// }

// export default App;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbardiv">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;
