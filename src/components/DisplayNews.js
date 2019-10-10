import React from "react";

const DesplayNews = props => (

	<div className="weather__info">

		{ 	

		props.country  && <p className="weather__key"> Country: 


			<span className="weather__value"> { props.country }</span>

		</p> 

        }
       

        
        

        


	

	



	</div>

);



export default DesplayNews;