import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: rgb(1, 1, 27);
    padding: 30px;
   
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    

    &:hover {
      color: white;
      
    }
  }
`;


const Navigator= () => (
    <Styles>
    <Navbar expand="lg">
        <Nav>
          <Link to="/" className="home-text">Home</Link>
           <Link to="/weather" className="weather">Weather</Link>
           <Link to="/countriesinfo" className="countries">Information</Link>
        </Nav>
      </Navbar>
  </Styles >
)
export default Navigator;
