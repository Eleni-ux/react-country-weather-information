import React, { Component } from 'react'; 
import { Container, Row, Col, Image, Navbar, Spinner, Nav, FormControl,  Button, NavItem, NavDropdown, Dropdown} from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';




import { Link, BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Form from "./Home";

function Home(){

    return(
        <div>
          <div className = "home-body-in">
                <div className = "home-in">Welcome to world's weather and information finder!</div>
            </div>   
              
        </div> 
       


    );
}


     

export default Home;