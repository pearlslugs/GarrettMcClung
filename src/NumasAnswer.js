import React, { useState } from 'react';
import NumasJson from './NumasAnswers.json';
import './NumasAnswers.css';
import Nav from './Nav.js';

function NumasAnswer(props) {

	
		
	const player = {
		base: "https://open.spotify.com/embed/album/",
		spec: NumasJson[props.song].Spotify
	}
	const [album, setAlbum] = useState(player.base + player.spec);
  return (
    <div className="NumasAnswer">
		<div className="numas-answers-text">
			<div className="words">
				<div className="artist">
					{NumasJson[props.song].artist}<br />
				</div>
				<div className="description">
					{NumasJson[props.song].text}
				</div>
			</div>
			<div className="player">
				<iframe title="spotify" src={album} width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
			</div>	
			<div className="bottom-buttons">	
				<div className="numas-answer-button">
					<div className="restart-button-numas" onClick={props.restart}></div><p>Restart</p>
				</div>
				<Nav home={props.home} link="https://github.com/pearlslugs/GarrettMcClung/blob/master/src/NumasAnswer.js" />
			</div>				
		</div>
			
	</div>
  );
}

export default NumasAnswer;
