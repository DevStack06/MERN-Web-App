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
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (
      <div className="App">
        <dv className="navbardiv">
          <Navbar />
        </dv>
        <div className="bodydiv">
          <h1> Simple Popup Example In React Application </h1>
          <button onClick={this.togglePopup.bind(this)}>
            {" "}
            Click To Launch Popup
          </button>

          {this.state.showPopup ? (
            <User
              text='Click "Close Button" to hide popup'
              closePopup={this.togglePopup.bind(this)}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
