import React, { useState } from 'react';
import './App.css';


function Bottom(props) {
	const [indexB, setIndexB] = useState(0);
	const setToProjectsB = () => {
		setIndexB((indexB * 0) + 1);
		
	}
	const setToHomeB = () => {
		setIndexB(indexB * 0);
	}
	const setToContactsB = () => {
		setIndexB((indexB * 0) + 2);
	}
/*refactoring*/
	const home = () => {
		setToHomeB();
		props.changePage(0);
	}
	const projects = () => {
		setToProjectsB();
		props.changePage(1);
	}
	const contact = () => {
		setToContactsB();
		props.changePage(2);
	}	
	if(props.index === 0) {

  return (
    <div className="bottom">
			<div className="twelve-container">
				<div className="twelve current"></div><h3>Home</h3>
			</div>
			<div className="twenty-container link"
				onClick={projects}
			>
				<div className="twenty"></div><h3>Projects</h3>
			</div>
			<div className="four-container link"
				onClick={contact}				
			>
				<div className="four"></div><h3>Contact</h3>
			</div>
    </div>
  );	
	}
	if(props.index === 1) {
	  return (
    <div className="bottom">
			<div className="twelve-container link"
					onClick={home}
			>
				<div className="twelve"></div><h3>Home</h3>
			</div>
			<div className="twenty-container">
				<div className="twenty current"></div><h3>Projects</h3>
			</div>
			<div className="four-container link"
				onClick={contact}
			>
				<div className="four"></div><h3>Contact</h3>
			</div>
    </div>
		);
	}
	if(indexB === 2) {
	  return (
    <div className="bottom">
			<div className="twelve-container link"
					onClick={home}
			>
				<div className="twelve"></div><h3>Home</h3>
			</div>
			<div className="twenty-container link"
				onClick={projects}
			>
				<div className="twenty "></div><h3>Projects</h3>
			</div>
			<div className="four-container">
				<div className="four current"></div><h3>Contact</h3>
			</div>
    </div>
		);
	}
	else {
		return(
			<div>
			</div>
		);
	}
	
}
export default Bottom;
