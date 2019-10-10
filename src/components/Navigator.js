import React, { Component } from "react";
import { Navbar, Nav, FormControl,  Button, NavItem, NavDropdown, DropdownButton, Dropdown} from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';

import { Link, BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import Weather from "./Weather";
import CountriesInfo from "./CountriesInfo";
class Navigator extends Component{
    
   render(){
        return(
            <styles>
                <Navbar expand="lg" className="body">
                    <Nav>
                         <Nav.Link href="./" className = "home"> Home</Nav.Link>
                        <Nav.Link href="./weather"  className= "weather">Weather</Nav.Link>
                        <Nav.Link href="./countriesInfo" className="countries">Information</Nav.Link>
                    </Nav>
                </Navbar>
            </styles>
        );
   }

}

export default Navigator;