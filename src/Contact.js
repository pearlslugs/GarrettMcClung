import React from 'react';
import './Background.css';

function Contact(props) {
  return (
    <div className="BackgroundsecondAlt">
		<form>
			<p>Name</p>
			<input placeholder="name"></input>
			<p>Email</p>
			<input placeholder="email"></input>
			<p>Please leave a message</p>
			<textarea></textarea>
		</form>
    </div>
  );
}

export default Contact;
