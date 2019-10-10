import React, { Component } from 'react'; 
import FormNews from "./FormNews";
import DisplayNews from "./DisplayNews";
const API_KEY = "019323c76f0c4c428af2118c3d30d53f";

class News extends Component{
    state={
        temperature: undefined,
        
    }
 
    
    getInfo = async(e) => {
        e.preventDefault();
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://newsapi.org/v2/top-headlines -G \-d country=${country}\-d apiKey=${API_KEY}`);
        const data = await api_call.json();
        
        console.log(data);
       
          
        
    }

    
          render(){
            return(
                <div>
               
               <FormNews getInfo = {this.getInfo}/>       
             
            </div>
                
      
            )};
          
      }
      

export default News;