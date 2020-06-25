import React, { useState } from 'react';

function Nav(props) {
	const [clicked, setClicked] = useState(false);
	const navButtonClicked = () => {
		setClicked(true);
	}
	const navButtonUnclicked = () => {
		setClicked(false);
	}
	if(clicked === false){
  return (
    <div onClick={navButtonClicked} className="nav-button"> +
    </div>
  );
}
	if(clicked === true){
  return (
  <>
    <div onClick={navButtonUnclicked} className="nav-button"> +
	</div>
	<div onClick={props.home} className="go-home">
	</div>
	<a target="_blank" rel="noopener noreferrer" href={props.link}><div className="github">
	</div></a>
	</>
  );
	}
}
export default Nav;
