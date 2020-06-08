import React, { useState, useEffect } from 'react';
import Header from './Header';
import Boxes from './Boxes';
import LoginInfo from './Bubblusernamejson.json';
import './Bubbl.css';
import Bubblcontent from './Bubblcontent.js'
import Nav from './Nav.js';

function Bubbl(props) {  
		const [user, setUser] = useState('');
		const [loggedIn, setLoggedIn] = useState(false);
		const title = {
		main: 'bubbl',
		sub: 'Pop right out'
		}
		const login = () => {
			setLoggedIn(true);
		}
		const getUser = () => (user) => {
			setUser(user);
		}
	if(loggedIn === true){
	  return(
		<Bubblcontent home={props.home} user={user}/>
	  );
  }
  return (
    
	<div className="Bubbl">
		<div className="Bubbl-background">
			<Header title={title} />
			<Boxes login={login} setUser={setUser} />
		</div>
		<Nav home={props.home} />
    </div>
	
  );
}

export default Bubbl;
