import React, { useState, useEffect } from 'react';
import './Background.css';
import axios from 'axios';

function Contact(props) {
	useEffect(() => {
	axios	
		.get('https://quiet-dawn-89547.herokuapp.com/messages')
		.then(response => {
		console.log(""
	)}, [])
			
	const submitForm = (e) => {
		e.preventDefault();
		if(nameValidation === 1 && emailValidation === 1 && messageValidation === 1){
		const submittedObject = {
			name: name,
			email: email,
			message: message
		}
	

		axios
			.post('https://quiet-dawn-89547.herokuapp.com/messages', submittedObject)
			.then(response => {
			console.log("")
		})
		setTimeout(setDone(true), 5000);
		}
	}
	const [done, setDone] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [nameValidation, setNameValidation] = useState(0);
	const [emailValidation, setEmailValidation] = useState(0);
	const [messageValidation, setMessageValidation] = useState(0);
	let nameString = '';
	let emailString = '';
	let messageString = ''

	const nameInput = (e) => {
		nameString = e.target.value;
		if(nameString !== "") {
			setNameValidation(1);
		}
		else if(nameString == "") {
			setNameValidation(-1);
		}
		setName(nameString);

	}
	const emailInput = (e) => {
		emailString = e.target.value;
		if(validateEmail(email)) {
			setEmailValidation(1)
		}
		else if(!validateEmail(email)) {
			setEmailValidation(-1)
		}
		setEmail(emailString);
	}
    const messageInput = (e) => {
		messageString = e.target.value;
		if(messageString !== ''){
			setMessageValidation(1);
		}
		else if(messageString === ''){
			setMessageValidation(-1)
		}
		setMessage(messageString);
	}
	const validateEmail = (email) => {
		const validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return validate.test(String(email).toLowerCase())
	}
	if(done === true){
		return(
		<div className="BackgroundsecondAlt">
			<h1>Message sent</h1>
		</div>
		)
	}
  return (
    <div className="BackgroundsecondAlt">
		<form>
			<p className={
				(nameValidation === -1) ?
					"red" :
					""
			}>Name</p>
			<input autoComplete="new-password" type="none" onChange={nameInput} value={name} placeholder="name..."></input>
			<p className={
				(emailValidation === -1) ?
					"red" :
					""
			}>Email</p>
			<input autoComplete="new-password" onChange={emailInput} value={email} placeholder="email..."></input>
			<p className={
				(messageValidation === -1) ?
					"red" :
					""
			}>Please leave a message</p>
			<textarea onChange={messageInput} value={message}></textarea>
			<button type="submit" onClick={submitForm} >Submit</button>
		</form>
    </div>
  );
}

export default Contact;
