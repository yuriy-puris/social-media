import React from 'react';

import Login from './components/auth/login.js';
import Header from './components/header.js';
import CreatePost from './components/createPost.js';
import PostList from './components/postList.js';


const App = () => {
	const [user, setUser] = React.useState('');
	const [posts, setPosts] = React.useState('');

	if ( !user ) return <Login setUser={ setUser } />

	return (
		<>
			<Header 
				user={ user } 
				setUser={ setUser } />
			<div>App</div>
			<CreatePost 
				user={ user }
				posts={ posts } 
				setPosts={ setPosts } />
			{ posts.length && <PostList user={ user } posts={ posts } /> }
		</>
	)
};


export default App;
