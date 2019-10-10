import React from "react";
const FormCountry = props => (
	<form onSubmit={props.getInfo}>
		<input type="text" name="country" placeholder="Country..."/>
		<button >Get Info</button>
	</form>
);

export default FormCountry;
