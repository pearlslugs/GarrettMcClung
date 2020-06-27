import React from 'react';
import Nav from './Nav';

function ProfileRight({ who, contacts, left}) { 
if(left === 0) {
	return (
	<>
		<p>{who.about.general}</p>
	</>
	)
}
if(left === 1) {
	return (
	<>
		<p>{who.about.hobbies}</p>
	</>
	)
}

if(left === 2){
	return (
	<>
		<p>{who.about.work}</p>
	</>
	)
}	

if(left === 3){
	return (
	<>
		<p>{contacts.phone}</p>
	</>
	)

}
}


export default ProfileRight;
