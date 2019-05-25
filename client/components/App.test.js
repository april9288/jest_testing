import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from './App';

describe('testing App component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<App />).length).toEqual(1)
	})

	//snapshot testing by Jest
	it('should grab a snapshot of the component.', ()=> {
		const component = renderer.create(<App />)
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	})

})
