import React from 'react';
import {Switch,Redirect} from "react-router-dom";
import renderRoutes from "@utils/renderRoutes";
import {baseConfigRoute} from "@router";

class App extends React.Component {
  render(){
    return (
      <Switch>
        {renderRoutes(baseConfigRoute)}
        <Redirect to="/home" />
      </Switch>
    );
  }
}

export default App;
