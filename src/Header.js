import React from 'react';

function Header(props) {
  return (
    <div className="header">
		<h1 id="title">{props.title.main}</h1>
		<h2 id="tag-line"><i>{props.title.sub}</i></h2>
    </div>
  );
}

export default Header;
