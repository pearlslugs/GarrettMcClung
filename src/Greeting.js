import React, { useState } from 'react';
import './Background.css';

function Greeting({user}) {
	const hello = [
		"Hey",
		"Hello",
		"Howdy",
		"Greetings",
		"Salutations, fellow human",
		"Salut",
		"Zdravstvuyte",
		"Salve",
		"Hallo",
		"Hola",
		"Nǐ hǎo",
		"Yā, Yō",
		"Oi",
		"Anyoung haseyo",
		"Ahlan",
		"Shikamoo",
		"Hujambo",
		"Yassou",
		"Selamat siang",
		"Merhaba",
		"Tjena",
		"Shl'am lak"
		]
		const howAreYouFeeling = [
		"what's up?", 
		"tell me how you're feeling.",
		"have something to show the world?",
		"what's good?"
		]
	const greetUser = hello[Math.floor(Math.random() * hello.length)];
	const ask = howAreYouFeeling[Math.floor(Math.random() * hello.length)];
  return (
	<>
	hey, {user}, what's up?
	</>	);
}

export default Greeting;
