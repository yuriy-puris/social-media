import React from 'react';


const Login = ({ setUser }) => {
	const [username, setUsername] = React.useState('');
	
	const handlerOnSubmit = (event) => {
		event.preventDefault();
		setUser(username);
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={ handlerOnSubmit }>
				<input 
					type="text"
					placeholder="name"
					onChange={ event => setUsername(event.target.value) }  />
				<button type="submit">Submit</button>
			</form>
		</div>
	) 
};


export default Login;