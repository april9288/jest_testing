import React from 'react';
import ReactDOM from 'react-dom';

import Bpp from './components/Bpp';
import App from './components/App';

const data = [
	{
		image:"https://source.unsplash.com/280x140/?food",
		name:"James Grill",
		rate: 4
	}
]

ReactDOM.render(
	<div>
		<Bpp />
		<App data={data}/>
	</div>, document.getElementById('app'))