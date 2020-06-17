import React, { useState, useEffect } from 'react';
import Header from './Header';
import Boxes from './Boxes';
import LoginInfo from './Bubblusernamejson.json';
import './Bubbl.css';
import Bubblcontent from './Bubblcontent.js'
import Nav from './Nav.js';
import axios from 'axios';

function Bubbl(props) {  

		useEffect(() => {
			axios	
				.get('http://localhost:3002/profiles')
				.then(response => {
						setUsers(response.data)
						console.log(users)
				})
		}, []);
		const refresh = () => {
						axios	
				.get('http://localhost:3002/profiles')
				.then(response => {
						setUsers(response.data)
						console.log(users)
				})
		};
		const [users, setUsers] = useState([]);
		const [user, setUser] = useState('');
		const [loggedIn, setLoggedIn] = useState(false);
		const title = {
		main: 'bubbl',
		sub: 'Pop right out'
		}
		const userLogin = () => {
			setLoggedIn(true);
		}
		const getUser = () => (user) => {
			setUser(user);
		}
	if(loggedIn === true){
	  return(
		<Bubblcontent home={props.home} refresh={refresh} user={user} users={users}/>
	  );
  }
  return (
    
	<div className="Bubbl">
		<div className="Bubbl-background">
			<Header title={title} />
			<Boxes userLogin={userLogin} setUsers={setUsers} setUser={setUser} users={users} />
		</div>
		<Nav home={props.home} />
    </div>
	
  );
}

export default Bubbl;
