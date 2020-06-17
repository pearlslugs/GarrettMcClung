import React, { useState } from 'react';
import Profile from './Profile';

function FriendsPosts({users, user, nav, home, profileView, setProfileView, postsToShow}) { 
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
	const goToProfile = () => (e) => {
		if(e.target.getAttribute("value") !== user){
		setProfileView(e.target.getAttribute("value").toLowerCase())
	}
	}
	function compare(a, b) {
		const idA = parseInt(a.id);
		const idB = parseInt(b.id);
		console.log(idA);
		
		let comparison = 0;
		if(idA < idB){
			comparison = 1;
		}
		else if (idA > idB) {
			comparison = -1;
		}
	return comparison
	}
	const order = postsToShow.sort(compare);
	console.log(order);
	return (
	<div className="friends-posts">
	{order.map(friendPost =>
	<div className="single-post-bubbl" key={friendPost.username}>
		<div className="top-row" value={friendPost.username} key={friendPost.username} onClick={goToProfile()}>
			<img value={friendPost.user} src={friendPost.profilePic}></img>
			<h5 value={friendPost.user}>{friendPost.user}</h5>
		</div>
		<div className="single-post-content" key={friendPost.content}>
			{friendPost.content}	
		</div>
		<div className="bottom-row" >
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
