//big stuff
import React, { useState } from 'react';
import LoginInfo from './Bubblusernamejson.json';
//css

//components


function Boxes(props) {
	const [login, setLogin] = useState(0);
	const [signUp, setSignUp] = useState(0);
	const greetings = [
	'Oh hi, you',
	'Henlo, fren',
	'Welcome back',
	'Back so soon?'
]	
	
	let loginUsernameString = '';
	let loginPasswordString = '';
	const loginChange = (e) => {
		loginUsernameString = e.target.value;
	}
	const loginPasswordChange = (e) => {
		loginPasswordString = e.target.value;	
	}
	const loginButton = () => {
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
		LoginInfo.forEach(person => {
		if(loginUsernameString === person.username && loginPasswordString.toString() === person.password){
			props.login();
			props.setUser(person.username);
		}
	})
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
	<input type="text" placeholder="Email..."></input>
	<p>Desired Username</p>
	<input type="text" placeholder="Username..."></input>
	<p>Password</p>
	<input type="text" placeholder="Password..."></input>
	<div className="sign-up-and-go-back">
		<button id="sign-up">Sign Up</button>
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
