import React, { useState } from 'react';
import Bubblcontentjson from './Bubblcontentjson.json';

function FriendsPosts(props) { 
	const [posts, setPosts] = useState(Bubblcontentjson.length);
	const [upArrow, setUpArrow] = useState('up');
	const [downArrow, setDownArrow] = useState('down');
	const upArrowClick = () => {
		setUpArrow('up-clicked');
		setDownArrow('down');
	}
	const downArrowClick = () => {
		setUpArrow('up');
		setDownArrow('down-clicked');
	}
	
	return (
	<div className="friends-posts">
	{Bubblcontentjson.map(friendPost =>
	<div className="single-post-bubbl">
		<div className="top-row">
			<img src={friendPost.profilePic}></img>
			<h5>{friendPost.user}</h5>
		</div>
		<div className="single-post-content">
			{friendPost.content}	
		</div>
		<div className="bottom-row">
			<div onClick={upArrowClick} className={upArrow}></div>
			<div onClick={downArrowClick} className={downArrow}></div>
			<div className="comment"></div>
			<div className="share"></div>
		</div>
	</div>
	)}
	</div>
	)
}

export default FriendsPosts;
