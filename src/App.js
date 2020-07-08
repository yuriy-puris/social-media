import React from 'react';

import Login from './components/auth/login.js';
import Header from './components/header.js';
import CreatePost from './components/createPost.js';
import PostList from './components/postList.js';
import postReducer from './reducer';

export const UserContext = React.createContext();
export const PostContext = React.createContext({
	posts: []
});

const App = () => {
	const initialPostState = React.useContext(PostContext);
	const [state, dispatch] = React.useReducer(postReducer, initialPostState);
	const [user, setUser] = React.useState('Creed');


	React.useEffect(() => {
		document.title = user ? `${user}'s Feed` : 'Please login';
	}, [user]);


	if ( !user ) return <Login setUser={ setUser } />

	return (
		<PostContext.Provider value={{ state, dispatch }}>
			<UserContext.Provider value={{ user }}>
				<Header user={ user } setUser={ setUser } />
				<CreatePost user={ user } />
				<PostList posts={ state.posts } />
			</UserContext.Provider>
		</PostContext.Provider>
	)
};


export default App;
