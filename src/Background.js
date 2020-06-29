import React from 'react';
import './Background.css';

function Background() {
  return (
    <div className="Background">
	<h1 className="text-front-page">Garrett McClung</h1>
	<h2 id="under-text-front-page">Web Dev</h2>
	<h3>307-286-8545</h3>
	<h3>garrettmcclung1@gmail.com</h3>
	<div className="social">
	<a href="https://www.facebook.com/gary.mcclung.12" target="_blank" rel="noopener noreferrer">
		<div className="twitter"></div>
	</a>
		<a href="https://twitter.com/pearlslugs" target="_blank" rel="noopener noreferrer">
			<div className="facebook"></div>
		</a>
	</div>
    </div>
  );
}

export default Background;
