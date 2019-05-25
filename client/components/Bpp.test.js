import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Bpp from './Bpp';

describe('testing Bpp component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Bpp />).length).toEqual(1)
	})

	//To check if componentDidMount() calls the 'updateUserData' function
	it('should render componentDidMount()', ()=> {
		let wrapper = mount(<Bpp />)
		let instance = wrapper.instance()
		jest.spyOn(instance, 'updateUserData')
		instance.componentDidMount()
		expect(instance.updateUserData).toHaveBeenCalledTimes(1)
	})

})
