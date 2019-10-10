import React from "react";



const Desplay = props => (

	<div className="weather__info">

		{ 	

		props.country && props.city && <p className="weather__key"> Country: 


			<span className="weather__value"> { props.city }, { props.country }</span>

		</p> 

		}


	 { 	

	 	props.temperature && <p className="weather__key"> Temperature: 

         
	 		<span className="weather__value"> { props.temperature } <span>&#176;</span>F</span>

	 	</p> 

	 }

	 { 	

	 	props.humidity && <p className="weather__key"> Humidity: 

	 		<span className="weather__value"> { props.humidity } </span>

	 	</p> 

	 }

	 { 	

	 	props.description && <p className="weather__key"> Conditions: 

	 		<span className="weather__value"> { props.description } </span>

	 </p> 

   }
    { 	

     props.wind_degree && <p className="weather__key"> Wind Degree: 

      <span className="weather__value"> {props.wind_degree } </span>

      </p> 

   }
   { 	

    props.wind_speed && <p className="weather__key"> Wind Speed: 

    <span className="weather__value"> { props.wind_speed } </span>

    </p> 

}

	 { 

	 	props.error && <p className="weather__error">{ props.error }</p>  

	 }

	</div>

);



export default Desplay;