import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';
import ProfileRight from './ProfileRight';

function Profile({profileView, users, home, back, postsToShow}) { 

	const [who, setWho] = useState('');
	const [done, setDone] = useState(false);
	const [left, setLeft] = useState(-1);
	let currentProfile;
	let contacts;
	const setCurrentProfile = users.forEach(user => {
		if(user.username == profileView) {
			currentProfile = user;
			contacts = user.contact;
		}
	})
	if(done === false){
	setWho(currentProfile);
	setDone(true);
	}
	const leftButtonClassChooser = () => {
		
	}
	const returnToDash = () => {
		back()
		setWho('');
		setDone(false);
	}
	const [upArrow, setUpArrow] = useState('up');
	const [downArrow, setDownArrow] = useState('down');
	const upArrowClick = () => {
		setUpArrow('up-clicked');
		setDownArrow('down');
	}
	const leftButtonClick = (num) => () => {
		setLeft(num)
	}
	const downArrowClick = () => {
		setUpArrow('up');
		setDownArrow('down-clicked');
	}
if(left !== -1){
	return (
	<div>
		<div className="bubbl-top-bar">
			<div className="bubbl-content-logo bubbl-top-bar-content">Bubbl</div>
			<div className="bubbl-content-home-link bubbl-top-bar-content">Home</div>
			<div className="bubble-content-friends-link bubbl-top-bar-content">Friends</div>
			<div className="bubbl-content-forum-link bubbl-top-bar-content">Forum</div>
		</div>
		<div className="whole-page">
		<div className="profile">
			<div className="profile-content">
				<h1>{who.username}</h1>
				<img src={who.profilePic}></img>
				<div className="about">
					<div className="profile-left">
						<button onClick={leftButtonClick(0)} id="class-button">About</button>
						<button onClick={leftButtonClick(1)} id="class-button">Hobbies</button>
						<button onClick={leftButtonClick(2)} id="class-button">Work</button>
						<button onClick={leftButtonClick(3)} id="class-button">Contact</button>
					</div>
					<div className="profile-right">
						<ProfileRight left={left} who={who} contacts={contacts} />
					</div>
				</div>
					<button className="hide-about" onClick={leftButtonClick(-1)}>hide</button>
				<h2 className="profile-post-start">{who.username}'s posts</h2>
	<div className="profile-posts">
	<div className="friends-posts">
	{postsToShow.map(friendPost => { if(friendPost.user === who.username){
	return(
	<div className="single-post-bubbl" key={friendPost.key}>
		<div className="top-row" value={friendPost.user} key={friendPost.user}>
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
	
	)
	}
	})
	}
	</div>
	</div>
	</div>
			</div>
			<div className="bubbl-back" onClick={returnToDash}></div>
		</div>
		<Nav home={home} />

	</div>
	)
}
	if(left === -1) {
		
	return (
	<div>
		<div className="bubbl-top-bar">
			<div className="bubbl-content-logo bubbl-top-bar-content">Bubbl</div>
			<div className="bubbl-content-home-link bubbl-top-bar-content">Home</div>
			<div className="bubble-content-friends-link bubbl-top-bar-content">Friends</div>
			<div className="bubbl-content-forum-link bubbl-top-bar-content">Forum</div>
		</div>
		<div className="whole-page">
		<div className="profile">
			<div className="profile-content">
				<h1>{who.username}</h1>
				<img src={who.profilePic}></img>
				<div className="about">
					<button onClick={leftButtonClick(0)} className="show-about">About</button>										
				</div>
				<h2 className="profile-post-start">{who.username}'s posts</h2>
	<div className="profile-posts">
	<div className="friends-posts">
	{postsToShow.map(friendPost => { if(friendPost.user === who.username){
	return(
	<div className="single-post-bubbl" key={friendPost.key}>
		<div className="top-row" value={friendPost.user} key={friendPost.user}>
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
	)
	}
	})
	}
	</div>
	</div>
	</div>
			</div>
			<div className="bubbl-back" onClick={returnToDash}></div>
		</div>
		<Nav home={home} link="https://github.com/pearlslugs/GarrettMcClung/blob/master/src/Profile.js" />

	</div>
	)
	}
}

export default Profile;
