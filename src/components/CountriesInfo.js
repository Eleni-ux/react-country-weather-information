import React, { Component } from 'react'; 
import FormCountry from "./FormCountry";
import DisplayInfo from "./DisplayInfo";

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
              
                <div className="center_info">
                       Country's Info
                </div>
                
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