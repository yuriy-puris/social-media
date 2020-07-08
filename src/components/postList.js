import React from 'react';
import Post from './post.js';

const PostList = ({ user, posts }) => {
	return posts.map((post, index) => <Post key={index} {...post} user={user} /> )
};


export default PostList;