import React, { Component } from 'react'; 
import Form from "./Form";
import Desplay from "./Desplay";
import styled from 'styled-components';
import image1 from './image1.jpg';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
const API_KEY = "0d3f90f30436ef1590f3b4fd47867da0";
const Styles = styled.div`
  .jumbo {
    background: url(${image1}) no-repeat fixed bottom;
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


class Weather extends Component{
    state={
        temperature: undefined,
        humidity: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        latitud:undefined,
        longtude: undefined,
        wind_degree: undefined,
        wind_speed: undefined,
        error: undefined
    }
    convertTemprature = (temprature) => {
      return (temprature + (9/5)) + 32;
     }
    getInfo = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        const temp = this.convertTemprature(parseInt(data.main.temp));
        console.log(data);
        if (city && country) {

            this.setState({
          
              temperature: temp,
              city: data.name,
              country: data.sys.country,
              humidity: data.main.humidity,
              description: data.weather[0].description,
              latitud: data.coord.lat,
              longtude: data.coord.lon,
              wind_degree: data.wind.deg,
              wind_speed: data.wind.speed,
              error: ""
          
            });
          
          } else {
          
            this.setState({
          
              temperature: data.main.temp,
              city: data.name,
              country: data.sys.country,
              humidity: data.main.humidity,
              description: data.weather[0].description,
              latitud: data.coord.lat,
              longtude: data.coord.lon,
              wind_degree: data.wind.deg,
              wind_speed: data.wind.speed,
              error: "Please enter the values."
          
            });
          
          }}

    
          render(){
            return(
              <div >
                  <Styles>
                    <Jumbo fluid className="jumbo">
                      <div className="overlay"></div>
                          <Container className = "contain">
                            World Weather Finder
                      </Container>
                    </Jumbo>
                  </Styles>
                
                <div className="wrapper">
      
                <div className="main">
                
                  <div className="form-container">
                  
                   <div className="col-xs-10 form-container">
      
                        <Form getInfo={this.getInfo} />
      
                        <Desplay

                          city = {this.state.city}
                          
                          country = {this.state.country}
                          
                          temperature={this.state.temperature} 
      
                          humidity={this.state.humidity}
      
                          city={this.state.city}
      
                          country={this.state.country}
      
                          description={this.state.description}
                          
                          wind_degree = {this.state.wind_degree}
      
                          wind_speed = {this.state.wind_speed}
      
                          error={this.state.error}
      
                        />
                      
                      </div>
      
                    
      
                  </div>
      
                </div>
      
              </div>
      
            </div>
                
      
            )};
          
      }
      

export default Weather;