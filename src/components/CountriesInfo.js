import React, { Component } from 'react'; 
import FormCountry from "./FormCountry";
import DisplayInfo from "./DisplayInfo";
import styled from 'styled-components';
import image2 from './image2.jpg';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
const Styles = styled.div`
  .jumbo {
    background: url(${image2}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 120px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

class CountriesInfo extends Component{
    state={
        country : undefined,
        capital: undefined,
        population: undefined,
        region: undefined,
        nativeName: undefined,
        error: undefined
       
    }
    
    getInfo = async(e) => {
        e.preventDefault();
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
        const data = await api_call.json();
        
        if (country) {

            this.setState({
                country : country,
                capital: data[0].capital,
                population: data[0].population,
                region: data[0].region,
                nativeName: data[0].nativeName,
                error: ""
            });
          
          } else {
          
            this.setState({
                country : country,
                capital: data[0].capital,
                population: data[0].population,
                region: data[0].region,
                nativeName: data[0].nativeName,
                error: "Please enter the country."
          
            });
          
          }}

        render(){
            return(
            <div>
              <Styles>
                <Jumbo fluid className="jumbo">
                  <div className="overlay"></div>
                      <Container className = "contain">
                        World Information Finder
                  </Container>
                </Jumbo>
              </Styles>
                
                <div className="wrapper">
          
                    <div className="main">
          
                      <div className="form-container">
          
                        <div className="col-xs-10 form-container">
          
                          <FormCountry getInfo = {this.getInfo}/>  
                            <DisplayInfo
    
                              country = {this.state.country}
                              
                              capital = {this.state.capital}
                             
                              population = {this.state.population}
                              
                              region = {this.state.region}
                              
                              nativeName = {this.state.nativeName}
    
                           />
          
                        </div>
          
                      </div>
          
                    </div>
          
                  </div>
          
                </div>
                
      
            )};
          
      }
      

export default CountriesInfo;