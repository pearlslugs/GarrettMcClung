import React, { useState, useEffect } from 'react';
import './bubblcontent.css';
import FriendsPosts from './FriendsPosts.js';
import Nav from './Nav.js';
import Profile from './Profile';
import Greeting from './Greeting';
import axios from 'axios';

function Bubblcontent({ user, home, users }) {
	const [postsMade, setPostsMade] = useState(0);
			useEffect(() => {
			axios	
				.get('https://quiet-dawn-89547.herokuapp.com/bubblposts')
				.then(response => {
				console.log(response.data)}
			)}, [])
			
	const addPost = (e) => {
			
			const postObject =  
				{
				user: user,
				profilePic: userProfilePic,
				imageUpload: "",
				content: contentValue,
				mood: ""
				}

		axios
			.post('https://quiet-dawn-89547.herokuapp.com/bubblposts', postObject)
			.then(response => {
				setTimeout(setContentValue(''), 2000);
				if(page === 0){
					setPage(3);
				}
				if(page === 3){
					setPage(0);
				}
			axios	
				.get('https://quiet-dawn-89547.herokuapp.com/bubblposts')
				.then(response => {
					setPostsToShow(response.data)
		})
		})

		}
	const [postsToShow, setPostsToShow] = useState([]);
			
		useEffect(() => {axios	
				.get('https://quiet-dawn-89547.herokuapp.com/bubblposts')
				.then(response => {
						setPostsToShow(response.data)
				})
		}, []);
	const [page, setPage] = useState(0);
	let userPostValue = '';
	const [profileView, setProfileView] = useState('');
	const userPost = (e) => {
		userPostValue = e.target.value;
		console.log(userPostValue)
		setProfileView(userPostValue);
	}
	const changePage = (num) => () => {
		setPage(num);
	}
	const back = () => {
		setProfileView('');
	}
		
	const textareaClassChooser = () => {
		if(userPostValue !== ''){
			console.log('yes');
			return 'textarea'
		}
	}
	let postString = '';
	const [postContent, setPostContent] = useState('');
	const contentChange = (e) => {
		setContentValue(e.target.value);
	}
	let profilePic
	let userProfilePic;
	const userProfilePicChooser = users.forEach(profile => {
		console.log(profile, profile.username, user);
		if(profile.username == user){
			userProfilePic = profile.profilePic;
		}
		else {
			console.log("no match for users");
		}
	})
	const [contentValue, setContentValue] = useState('');
	const makePost = () => {
		addPost()
	}
	if(profileView != '' && profileView != user){
		return(
		<Profile postsToShow={postsToShow} home={home} profileView={profileView} users={users} back={back} />
		)
	}
	if(page === 0) {
  return (
    <div className="bubbl-content">
		<div className="bubbl-top-bar">
			<div className="bubbl-content-logo bubbl-top-bar-content">Bubbl</div>
			<div className="bubbl-content-home-link bubbl-top-bar-content active">Home</div>
			<div onClick={changePage(1)} className="bubble-content-friends-link bubbl-top-bar-content">Friends</div>
			<div onClick={changePage(2)} className="bubbl-content-forum-link bubbl-top-bar-content">Forum</div>
		</div>
		<div className="bubbl-greeting">
			<img className="user-profile-pic" src={userProfilePic}></img>
			 <Greeting user={user} />
		</div>
		<div className="make-post">
			<textarea onChange={contentChange} value={contentValue}  className={textareaClassChooser()} placeholder="Tell me about it..."></textarea>
			<button onClick={makePost}>Submit</button>
		</div>
		<div>
			<FriendsPosts user={user} postsToShow={postsToShow} users={users} home={home} profileView={profileView} setProfileView={setProfileView}			/>
		</div>
		<Nav home={home} back={back} />
	</div>
  );
}
	if(page === 3) {
  return (
    <div className="bubbl-content">
		<div className="bubbl-top-bar">
			<div className="bubbl-content-logo bubbl-top-bar-content">Bubbl</div>
			<div className="bubbl-content-home-link bubbl-top-bar-content active">Home</div>
			<div onClick={changePage(1)} className="bubble-content-friends-link bubbl-top-bar-content">Friends</div>
			<div onClick={changePage(2)} className="bubbl-content-forum-link bubbl-top-bar-content">Forum</div>
		</div>
		<div className="bubbl-greeting">
			<img className="user-profile-pic" src={userProfilePic}></img>
			 <Greeting user={user} />
		</div>
		<div className="make-post">
			<textarea onChange={contentChange} value={contentValue}  className={textareaClassChooser()} placeholder="Tell me about it..."></textarea>
			<button onClick={makePost}>Submit</button>
		</div>
		<div>
			<FriendsPosts user={user} postsToShow={postsToShow} users={users} home={home} profileView={profileView} setProfileView={setProfileView}			/>
		</div>
		<Nav home={home} back={back} />
	</div>
  );
}

if(page === 1) {
	return (
	<div className="bubbl-content">
		<div className="bubbl-top-bar">
			<div className="bubbl-content-logo bubbl-top-bar-content">Bubbl</div>
			<div onClick={changePage(0)} className="bubbl-content-home-link bubbl-top-bar-content">Home</div>
			<div className="bubble-content-friends-link bubbl-top-bar-content active">Friends</div>
			<div onClick={changePage(2)} className="bubbl-content-forum-link bubbl-top-bar-content">Forum</div>
		</div>
		<h1 className="place-holder"> coming soon</h1>
	</div>
	)
}
if(page === 2) {
	return (
	<div className="bubbl-content">
		<div className="bubbl-top-bar">
			<div className="bubbl-content-logo bubbl-top-bar-content">Bubbl</div>
			<div onClick={changePage(0)} className="bubbl-content-home-link bubbl-top-bar-content">Home</div>
			<div onClick={changePage(1)} className="bubble-content-friends-link bubbl-top-bar-content">Friends</div>
			<div className="bubbl-content-forum-link bubbl-top-bar-content active">Forum</div>
		</div>
		<h1 className="place-holder"> coming soon</h1>
	</div>
	)
}
}	


export default Bubblcontent;
