import React from 'react';
import './Background.css';

function Background(props) {
  return (
    <div className="BackgroundAlt">
	<div className="projectOne">
		<div className="bubbl" onClick={props.bubbl}></div>
		<div className="bubble-text"><h4>Bubbl is currently a social media site mock up. It will be further developed to be a site dedicated to finding new content.</h4></div>
		</div>
	<div className="projectTwo">
		<div className="numas-text"><h4>Numas is a web app intended to reccomend an artist you may have not heard of based off of how you answer a series of questions.</h4></div>
		<div className="numas" onClick={props.numas}></div>
	</div>
	<div className="projectThree">
		<div className="weather" onClick={props.weatherApp}></div>
		<div className="weather-text"><h4>This is a weather app that uses an api and a number of background images to give a good idea of how the weather is aroudn the world.</h4></div>	
	</div>
    </div>
  );
}

export default Background;
