import React from 'react';
import './App.css';
import Layout from "./components/Layout";
import Home from "./components/Home";
import Weather from "./components/Weather";
import News from "./components/News";
import CountriesInfo from "./components/CountriesInfo";
import Navigator from "./components/Navigator";
import { Link, BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
 class App extends React.Component{
  
  
  render(){
  return (
      <React.Fragment>
        <Navigator/>
      <Layout>
      
      <Router>
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route exact path="/weather" component={Weather}/>
          <Route exact path="/countriesInfo" component={CountriesInfo}/>

        </Switch>
      </Router>
      </Layout>
      </React.Fragment>
  );
  }
}

export default App;
