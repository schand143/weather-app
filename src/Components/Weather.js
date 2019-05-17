  import React from "react";

  const Weather = props => (
 	
 		<div className="weather__info">
 		{ 
 			props.city && props.country && <p className="weather__key">Location: 
 			<spam className="weather__value">  {props.city} , {props.country}</spam>
 			</p> 
 		}	
 		{ 
 			props.temperature && <p className="weather__key">Temperature: 
 			<spam className="weather__value">  {props.temperature}</spam>
 			</p> 
 		}
		{ 
			props.humidity && <p className="weather__key">Humidity: 
			<spam className="weather__value">  {props.humidity}</spam>
			</p>
		}
 		{ 
 			props.description && <p className="weather__key">Condition:
 			 <spam className="weather__value">  {props.description}</spam>
 			 </p>
 		}
 		{ 
 			props.error && <p className="weather__error"> { props.error }</p>
 		}
 		</div>
 		);

 export default Weather;