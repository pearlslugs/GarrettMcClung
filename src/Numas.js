import React, { useState } from 'react';
import './numas.css';
import AppData from './numas.json';
import Buttons from './Buttons';
import NumasAnswer from './NumasAnswer.js';
import Nav from './Nav.js';

function Numas(props) {
	const [numasIndex, setNumasIndex] = useState(0);
	const [buttonLetter, setButtonLetter] = useState('');
	const [first, setFirst] = useState(true);
	const [buttonNumber, setButtonNumber] = useState(0);
	const [song, setSong] = useState(0);
	const restart = () => {
		setNumasIndex(0);
		setButtonLetter('');
		setButtonNumber(0);
		setFirst(0);
		setSong(0);
	}
		
		const bigSwitch = () => {
	switch(buttonNumber){
	case "101":
	setSong(0);
	break;
	case "102":
	setSong(1);
	break;
	case "103":
	setSong(2);
	break;
	case "104":
	setSong(3);
	break;
	case "105":
	setSong(4);
	break;
	case "106":
	setSong(5);
	break;
	case "107":
	setSong(6);
	break;
	case "108":
	setSong(7);
	break;
	case "109":
	setSong(8);
	break;
	case "110":
	setSong(9);
	break;
	case "111":
	setSong(10);
	break;
	case "112":
	setSong(11);
	break;
	case "113":
	setSong(12);
	break;
	case "114":
	setSong(13);
	break;
	case "115":
	setSong(14);
	break;
	case "116":
	setSong(15);
	break;
	case "117":
	setSong(16);
	break;
	case "118":
	setSong(17);
	break;
	case "119":
	setSong(18);
	break;
	case "120":
	setSong(19);
	break;
	case "121":
	setSong(20);
	break;
	case "122":
	setSong(21);
	break;
	case "123":
	setSong(22);
	break;
	case "124":
	setSong(23);
	break;
	case "125":
	setSong(24);
	break;
	case "126":
	setSong(25);
	break;
	case "127":
	setSong(26);
	break;
	case "128":
	setSong(27);
	break;
	case "129":
	setSong(28);
	break;
	case "130":
	setSong(29);
	break;
	case "131":
	setSong(30);
	break;
	case "132":
	setSong(31);
	break;
	case "133":
	setSong(32);
	break;
	case "134":
	setSong(33);
	break;
	case "135":
	setSong(34);
	break;
	case "136":
	setSong(35);
	break;
	case "137":
	setSong(36);
	break;
	case "138":
	setSong(37);
	break;
	case "139":
	setSong(38);
	break;
	case "140":
	setSong(39);
	break;
	case "141":
	setSong(40);
	break;
	case "142":
	setSong(41);
	break;
	case "143":
	setSong(42);
	break;
	case "144":
	setSong(43);
	break;
	case "145":
	setSong(44);
	break;
	case "146":
	setSong(45);
	break;
	case "147":
	setSong(46);
	break;
	case "148":
	setSong(47);
	break;
		}
		console.log(song, 'song');
	}
	
	const returnHome = () => {
		props.home();
		props.setToHome();
	}

	
	const buttonNumberSet = (num, letter) => {
		return () => {
		setButtonNumber(num);
		setButtonLetter(letter);
		setFirst(false);
		}
	}
	const pressSubmit = () => {
		submitButton();
		if(buttonNumber < 100){
		setFirst(true);
		}
	}
	const submitButton = () => {
		setNumasIndex(buttonNumber);
		setButtonLetter('');
		bigSwitch();
	}
if(numasIndex === 0){
	return (
	<div className="numas-project">
	<div className="numas-top"><div className="logo"></div><h1 className="numas-live-text">Numas</h1><div className="logo"></div></div>
    <div className="main">
			<div className="question">{AppData[numasIndex].question}</div>
			<div className="answers">
			<button className={(first === true ? 'button-one ' : '') + (buttonLetter === 'a' ? 'active-button' : '')} 
				onClick={buttonNumberSet(AppData[numasIndex].values.valueOne, 'a')}>
				{AppData[numasIndex].answers.answerOne}</button>
			<button className={(first === true ? 'button-two ' : '') + (buttonLetter === 'b' ? 'active-button' : '')}
				onClick={buttonNumberSet(AppData[numasIndex].values.valueTwo, 'b')}>
				{AppData[numasIndex].answers.answerTwo}</button>
			<button className={(first === true ? 'button-three ' : '') + (buttonLetter === 'c' ? 'active-button' : '')}
				onClick={buttonNumberSet(AppData[numasIndex].values.valueThree, 'c')}>
				{AppData[numasIndex].answers.answerThree}</button>
			<button className="submit" onClick={pressSubmit}>Submit</button>
			</div>
		</div>
		<div className="numas-bottom">
			<Nav home={props.home} />
		</div>
	</div>
  );
}
		
	if(numasIndex < 99){
  return (
	<div className="numas-project">
	<div className="numas-top"><div className="logo"></div><h1 className="numas-live-text">Numas</h1><div className="logo"></div></div>
    <div className="main">
			<div className="question">{AppData[numasIndex].question}</div>
			<div className="answers">
			<button className={(first === true ? 'button-one ' : '') + (buttonLetter === 'a' ? 'active-button' : '')} 
				onClick={buttonNumberSet(AppData[numasIndex].values.valueOne, 'a')}>
				{AppData[numasIndex].answers.answerOne}</button>
			<button className={(first === true ? 'button-two ' : '') + (buttonLetter === 'b' ? 'active-button' : '')}
				onClick={buttonNumberSet(AppData[numasIndex].values.valueTwo, 'b')}>
				{AppData[numasIndex].answers.answerTwo}</button>
			<button className={(first === true ? 'button-three ' : '') + (buttonLetter === 'c' ? 'active-button' : '')}
				onClick={buttonNumberSet(AppData[numasIndex].values.valueThree, 'c')}>
				{AppData[numasIndex].answers.answerThree}</button>
			<button  className={(first === true ? 'button-four ' : '') + (buttonLetter === 'd' ? 'active-button' : '')}
				onClick={buttonNumberSet(AppData[numasIndex].values.valueFour, 'd')}>
				{AppData[numasIndex].answers.answerFour}</button>
			<button className="submit" onClick={pressSubmit}>Submit</button>
			</div>
		</div>
		<div className="numas-bottom">
		</div>
		<Nav home={props.home} />
	</div>
  );
}
if(numasIndex > 99){
	return(
	<>
	<NumasAnswer home={props.home} numasIndex={numasIndex} song={song} restart={restart} />
	</>
	)
}
}


export default Numas;
