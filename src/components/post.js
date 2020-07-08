import React from 'react';
import { UserContext, PostContext } from "../App";


const Post = ({ image, content, user, id }) => {
	const { dispatch } = React.useContext(PostContext);
	const currentUser = React.useContext(UserContext);
	const isCurrentUser = currentUser === user;

	const handlerDeletePost = () => {
		dispatch({ type: 'DELETE_POST', payload: { id } });
	};

	return <React.Fragment>
		<div className="post-holder">
			{
				image && (
					<img 
					style={{ height: 100, width: 100, objectFit: 'cover' }}
					src={ URL.createObjectURL(image) } 
					alt="Post cover" />
				)
			}
			<p>{ content }</p>
			<div style={{ color: isCurrentUser && "green" }}>{user}</div>
			<div>
				{ isCurrentUser && <button onClick={ handlerDeletePost }>Delete</button> }
			</div>
		</div>
	</React.Fragment>
};


export default Post;