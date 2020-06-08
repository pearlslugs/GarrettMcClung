import React, { useState } from 'react';
import './bubblcontent.css';
import FriendsPosts from './FriendsPosts.js';
import Nav from './Nav.js';

function Bubblcontent({ user, home }) {
	let userPostValue = '';
	const userPost = (e) => {
		userPostValue = e.target.value;
	}
	const howAreYouFeeling = [
		"what's up?", 
		"tell me how you're feeling.",
		"have something to show the world?",
		"what's good?"
		]
	const hello = [
		"hey",
		"Hello",
		"Howdy",
		"Greetings",
		"Salutations, fellow human",
		"Salut",
		"Zdravstvuyte",
		"Salve",
		"Hallo",
		"Hola",
		"Nǐ hǎo",
		"Yā, Yō",
		"Oi",
		"Anyoung haseyo",
		"Ahlan",
		"Shikamoo",
		"Hujambo",
		"Yassou",
		"Selamat siang",
		"Merhaba",
		"Tjena",
		"Shl'am lak"
		]		
	const textareaClassChooser = () => {
		if(userPostValue !== ''){
			console.log('yes');
			return 'textarea'
		}
	}
		
  return (
    <div className="bubbl-content">
		<div className="bubbl-top-bar">
			<div className="bubbl-content-logo bubbl-top-bar-content">Bubbl</div>
			<div className="bubbl-content-home-link bubbl-top-bar-content">Home</div>
			<div className="bubble-content-friends-link bubbl-top-bar-content">Friends</div>
			<div className="bubbl-content-forum-link bubbl-top-bar-content">Forum</div>
		</div>
		<div className="bubbl-greeting">
			 {hello[Math.floor(Math.random() * hello.length)]} {user}, {howAreYouFeeling[Math.floor(Math.random() * howAreYouFeeling.length)]}
		</div>
		<div className="make-post">
			<textarea onChange={userPost} className={textareaClassChooser()} placeholder="Tell me about it..."></textarea>
			<button>Submit</button>
		</div>
		<div>
			<FriendsPosts />
		</div>
		<Nav home={home} />
	</div>
  );
}

export default Bubblcontent;
