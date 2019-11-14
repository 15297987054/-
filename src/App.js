import React from 'react';
import Detail from './pages/detail'
import Size from './pages/size'
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
 class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router >
            <Switch>
            <Route exact path="/"  component={Detail} />
              <Route  path="/size" component={Size} />
              <Route  path="/detail" component={Detail} />
              
            </Switch>
        </Router>
      </div>
    );
  }
}
export default App;


