import React, { useState } from 'react';
import './App.css';
import Background from './Background';
import Top from './Top';
import Bottom from './Bottom';
import Projects from './Projects';
import Contact from './Contact.js';
import Numas from './Numas';
import Bubbl from './Bubbl.js';
import WeatherApp from './WeatherApp.js';


function App() {
	/*this changes which page you are on*/
	const [index, setIndex] = useState(0);
	const setToHome = () => {
		setIndex(index * 0);
	}
	const changePage = (num) => {
		setIndex(num);
	}
	
	/*this will dispaly a live project*/

	const [projectIndex, setProjectIndex] = useState(0);
	const home = () => {
		setProjectIndex(projectIndex * 0);
		setIndex((index * 0) + 1);
	}
	const bubbl = () => {
		setProjectIndex((projectIndex * 0) + 1);
	}
	const numas = () => {;
		setProjectIndex((projectIndex * 0) + 2);
		}
	const weatherApp = () => {
		setProjectIndex((projectIndex * 0) + 3);
	}
	/*begin conditional rendering of protfolio page*/
  if(index === 0 && projectIndex === 0){
	    return (
    <div className="App">
		<Top />
		<Background bubbl={bubbl} numas={numas} weatherApp={weatherApp} />
		<Bottom index={index} changePage={changePage} />
    </div>
  );
  }
  if(index === 1 && projectIndex === 0){
	    return (
    <div className="App">
		<Top />
		<Projects bubbl={bubbl} numas={numas} weatherApp={weatherApp} />
		<Bottom index={index} changePage={changePage} />
    </div>
  );
  }
   if(index === 2 && projectIndex === 0){
	    return (
    <div className="App">
		<Top />
		<Contact />
		<Bottom index={index} changePage={changePage} />
    </div>
  );
  }
  /*render projects*/
  if(projectIndex === 1){
	  return(
		<Bubbl setToHome={setToHome} home={home} />
	  );
} 
 if(projectIndex === 2){
	  return(
		<Numas setToHome={setToHome} home={home} />
	  );
}
   if(projectIndex === 3){
	  return(
		<WeatherApp setToHome={setToHome} home={home} />
		);
   }
		 
}
export default App;
