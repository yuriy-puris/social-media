import React from 'react';
import { PostContext } from "../App";


const CreatePost = ({ user }) => {
	const { dispatch } = React.useContext(PostContext);
	const [content, setContent] = React.useState('');
	const [image, setImage] = React.useState(null);
	const imageInputRef = React.useRef();

	const handlerOnSubmit = event => {
		event.preventDefault();
		const post = {
			content: content,
			image: image,
			user: user
		};
		dispatch({ type: 'ADD_POST', payload: { post } });
		setContent('');
		setImage(null);
		imageInputRef.current.value = '';
	};

	return (
		<div>
			<h1>Create Post</h1>
			<form onSubmit={ handlerOnSubmit }>
				<input 
					type="text" 
					placeholder="Add content"
					value={ content }
					onChange={ event => setContent(event.target.value) } />
				<input 
					type="file"
					ref={ imageInputRef }
					onChange={ event => setImage(event.target.files[0]) } />
				<button type="submit">Create Post</button>
			</form>
		</div>
	)
};


export default CreatePost;