import React from "react";

const DesplayInfo = props => (

	<div className="weather__info">

		{ 	

		props.country  && <p className="weather__key"> Country: 


			<span className="weather__value"> { props.country }</span>

		</p> 

        }
        { 	

        props.capital  && <p className="weather__key"> Capital: 


            <span className="weather__value"> { props.capital }</span>

        </p> 

        }
        { 	

        props.population  && <p className="weather__key"> Population: 


            <span className="weather__value"> { props.population }</span>

        </p> 

        }
        { 	

        props.region  && <p className="weather__key"> Region: 


            <span className="weather__value"> { props.region }</span>

        </p> 

        }
        { 	

        props.nativeName  && <p className="weather__key"> Native-Name: 


            <span className="weather__value"> { props.nativeName }</span>

        </p> 

        }


	

	



	</div>

);



export default DesplayInfo;