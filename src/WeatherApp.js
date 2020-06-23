import React, { useState, useEffect } from 'react';
import './WeatherApp.css';
import Nav from './Nav.js';
import axios from 'axios';

const api = {
	key: '43a38e98f2fc699f46623c3f84cb92a1',
	base: 'https://api.openweathermap.org/data/2.5/'
	}
function WeatherApp(props) {
	
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});
	const [count, setCount] = useState(0);
	
  const search = evt => {
    if (evt.key === "Enter") {
		setCount(count + 1);
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

	const dateBuilder = (d) => {
		let months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
		let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
					"Saturday", "Sunday"];
		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();
		
	return day + ' ' + date + ' ' + month + ' ' + year; 
	}
	let test = 'test';
	const backgroundChooser = () => {
		if(typeof weather.weather != 'undefined'){
			if(weather.main.temp > 30){
				return 'app hot'
			}
			else if(weather.main.temp < -1){
				return 'app snowing'
			}
			else if(weather.weather[0].main === 'Snow'){
				return 'app snowing'
			}
			else if(weather.weather[0].main === 'Clouds'){
				return 'app cloudy'
			}
			else if(weather.weather[0].main === 'Rain'){
				return 'app raining'
			}
		}
		if(typeof weather.main != "undefined"){
			if(weather.main.temp > 30){
				return 'app hot'
			}
			else if(weather.main.temp > 19){
				return 'app warm'
			}
			else if(weather.main.temp > 14){
				return 'app temperate'
			}
			
			else {
				return 'app'
			}
	}
	return 'app none'
	}

  return (
    <div className={backgroundChooser()}>
		<main>
			<div className="search-box">
				<input type="text" 
				className="search-bar" 
				placeholder="Search..." 
				onChange={e => setQuery(e.target.value)} 
				value={query} onKeyPress={search} 
				/>
			</div>
			{(typeof weather.main != "undefined") ? (
		<div>
			<div className="location-box">
				<div className='location'>{weather.name}, {weather.sys.country}</div>
				<div className="date">{dateBuilder(new Date())}</div>
			</div>
			<div className="weather-box">
				<div className="temp">
				{Math.round(Math.round(weather.main.temp) * 1.8 + 32)}°
				</div>
				<div className="weather">
				{weather.weather[0].main}
				</div>
			</div>
		</div>
			) : (' ')} 
		</main>
		<Nav home={props.home}/>
    </div>
  );
}

export default WeatherApp;
