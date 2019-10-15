import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home  from './components/Home';
import  Weather  from './components/Weather';
import  CountriesInfo from './components/CountriesInfo';
import  Layout  from './components/Layout';
import  Navigator  from './components/Navigator';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navigator/>
            <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/weather" component={Weather} />
              <Route path="/countriesInfo" component={CountriesInfo} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;