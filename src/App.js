import React, { Component } from "react";
import HomeBuilder from "./Container/HomeBuilder/HomeBuilder";
import Layout from "./Hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import ProfileBuilder from "./Container/ProfileBuilder/ProfileBuilder";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            {/* <Route path="/signin" component={UserBuilder} />*/}
            <Route path="/profile" component={ProfileBuilder} />
            <Route path="/home" exact component={HomeBuilder} />
            <Route path="/" exact component={HomeBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
