import React from "react";
const FormNews = props => (
	<form onSubmit={props.getInfo}>
		<input type="text" name="country" placeholder="Country..."/>
		<button >Get News</button>
	</form>
);

export default FormNews;