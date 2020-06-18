import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Boxes({ userLogin, setUser, users, setUsers, refresh }) {
	console.log(users);
			useEffect(() => {
			axios	
				.get('https://quiet-dawn-89547.herokuapp.com/profiles')
				.then(response => {
				console.log(response.data)}
			)}, [])
			
	const addUser = (e) => {
		if((emailValid) && (signUpUsernameValid) && (signUpPasswordValid)){
			console.log(signUpUsernameString, signUpPasswordString, emailString);
			const userObject = {
		username: createUsername,
		password: createPassword,
		profilePic: "https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png",
		about: 
			{
			general: "none",
			hobbies: "none",
			work: "none"
			},
		contact: 
			{
			phone: "none",
			email: createEmail,
			website: "none"
			}						
			}

	axios
		.post('https://quiet-dawn-89547.herokuapp.com/profiles', userObject)
		.then(response => {
		console.log(response)
    })
	axios	
		.get('https://quiet-dawn-89547.herokuapp.com/profiles')
		.then(response => {
				setUsers(response.data)
				console.log(users)
	})
	}}

	const [createUsername, setCreateUsername] = useState('');
	const [createPassword, setCreatePassword] = useState('');
	const [createEmail, setCreateEmail] = useState('');
	const [login, setLogin] = useState(0);
	const [signUp, setSignUp] = useState(0);
	const [emailValid, setEmailValid] = useState(false);
	const [signUpUsernameValid, setSignUpUsernameValid] = useState(false);
	const [signUpPasswordValid, setSignUpPasswordValid] = useState(false);
	const validateEmail = (email) => {
		const validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return validate.test(String(email).toLowerCase())
	}
	const validateEmailCheck = (email) => {
		if(validateEmail(emailString)){
			setEmailValid(true);
			console.log("works");
		}
	}
	const validateSignUpUsernameCheck = (email) => {
		if(signUpUsernameString != '' && checkForDoubleUsername.every(findFalse)){
			setSignUpUsernameValid(true);
			console.log("works");
		}
	}
	const validateSignUpPasswordCheck = (email) => {
		if(signUpPasswordString != ''){
			setSignUpUsernameValid(true);
			console.log("works");
		}
	}
	const greetings = [
	'Oh hi, you',
	'Henlo, fren',
	'Welcome back',
	'Back so soon?'
]	
	
	let loginUsernameString = '';
	let loginPasswordString = '';
	let emailString = '';
	let signUpUsernameString = '';
	let signUpPasswordString = '';
	const loginChange = (e) => {
		loginUsernameString = e.target.value;
	}
	const loginPasswordChange = (e) => {
		loginPasswordString = e.target.value;	
	}
	const emailChange = (e) => {
		emailString = e.target.value;
		checkEmail();
		if(checkForDoubleEmail != undefined){
			if(checkForDoubleEmail.every(findFalse)){
			setEmailValid(true);
			setCreateEmail(emailString)
			}
			else if(checkForDoubleEmail.every(!findFalse)){
			setEmailValid(false);
		}
	}}
	const signUpUsernameChange = (e) => {
		signUpUsernameString = e.target.value
		checkUsername();
		if(checkForDoubleUsername.every(findFalse)){
			setSignUpUsernameValid(true);
			setCreateUsername(signUpUsernameString)
		}
		else if(checkForDoubleUsername.every(!findFalse)){
			setSignUpUsernameValid(false);
		}
		
	}
	const signUpPasswordChange = (e) => {
		signUpPasswordString = e.target.value;
		if(signUpPasswordString != ''){
			setSignUpPasswordValid(true);
			setCreatePassword(signUpPasswordString)
		}
		else if(signUpPasswordString == ''){
			setSignUpPasswordValid(false);
		}
		
	}
	const loginButton = () => {
	axios	
		.get('http://localhost:3002/profiles')
		.then(response => {
				setUsers(response.data)
				console.log(users)
	})
		setLogin(login + 1)
	}
	const signUpButton = () => {
		setSignUp(signUp + 1)
	}
	const goBackButton = () => {
		setSignUp(signUp * 0)
		setLogin(login * 0)
	}
	const loginButtonClick = () => {
		users.map(person => {
		if(loginUsernameString === person.username && loginPasswordString.toString() === person.password){
			userLogin();
			setUser(person.username);
		}
	})
	}
	const findFalse = (value) => value === true;
	let checkForDoubleEmail = [];
	let checkForDoubleUsername = [];
	const checkEmail = () => {
		checkForDoubleEmail = users.map(user => {
			console.log(user.contact.email, emailString.toLowerCase());
			if(user.contact.email === emailString){
				return false;
			}
			else{
				return true;
			}
		})
	}	
	const checkUsername = () => {
		checkForDoubleUsername = users.map(user => {
			console.log(checkUsername);
			console.log(user.username, signUpUsernameString.toLowerCase());
			if(user.username == signUpUsernameString){
				return false;
			}
			else{
				return true;
			}
		})
	}

	const signUpButtonClick = () => { 
		addUser();
		goBackButton();
	}
	const enterKeyPress = evt => {
    if (evt.key === "Enter") {
		loginButtonClick()
	}
	}


  if(login === 0 && signUp === 0){
  return (
	<div className="login-signup">
	<button onClick={loginButton}>Log in</button>
	<button onClick={signUpButton}>Sign up</button>
    </div>
  );
}

  if(login === 1 && signUp === 0){
  return (
	<div className="login-input">
	
	<p>{greetings[Math.floor(Math.random() * greetings.length)]}</p>
	<input autoFocus type="text" onKeyPress={enterKeyPress} placeholder="Username..." onChange={loginChange}></input>
	<input type="password" onKeyPress={enterKeyPress} placeholder="Password..." onChange={loginPasswordChange}></input>
	<div>
	<button id="log-in" onKeyPress={enterKeyPress} onClick={loginButtonClick} onKeyPress={loginButtonClick}>Log in</button>
	</div>
	<div className="back-button">
	<p onClick={goBackButton}>Go back</p>
	</div>
    </div>
	
  );
}
  if(login === 0 && signUp === 1){
  return (
	<div className="login-input">
	<p>Email</p>
	<input onChange={emailChange} type="text" placeholder="Email..."></input>
	<p>Desired Username</p>
	<input onChange={signUpUsernameChange} type="text" placeholder="Username..."></input>
	<p>Password</p>
	<input onChange={signUpPasswordChange} type="text" placeholder="Password..."></input>
	<div className="sign-up-and-go-back">
		<button onClick={signUpButtonClick} id="sign-up">Sign Up</button>
		<div className="blank"></div>
		<div className="back-button">
			<p onClick={goBackButton}>Go back</p>
		</div>
	</div>
    </div>
	
  );

}
}
export default Boxes;
