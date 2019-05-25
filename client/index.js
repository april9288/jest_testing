import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const data = [
	{
		image:"https://source.unsplash.com/280x140/?food",
		name:"James Grill",
		rate: 4
	}
]

ReactDOM.render(<App data={data}/>, document.getElementById('app'))