import React from 'react';


const Post = ({ image, content, user }) => {
	return <React.Fragment>
		<div className="post-holder">
			<p>{ user }</p>
			<p>{ content }</p>
			{
				image && (
					<img 
					style={{ height: 100, width: 100, objectFit: 'cover' }}
					src={ URL.createObjectURL(image) } 
					alt="test" />
				)
			}
		</div>
	</React.Fragment>
};


export default Post;