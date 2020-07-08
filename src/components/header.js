import React from 'react';


const Header = ({ user, setUser }) => {
	return (
		<div>
			<div>Welcome { user }!</div>
			{ user && <button onClick={ () => setUser('') } >Logout</button> }	
		</div>
	)
};


export default Header;