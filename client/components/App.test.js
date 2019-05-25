import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from './App';

describe('testing App component', ()=> {

	//snapshot testing by Jest
	//Be very careful!!! Once you are almost done with the target component, then run this code.
	//If you make any changes after taking a snapshot, it'll cause an error. (That's what it's for)
	it('should grab a snapshot of the component.', ()=> {
		const component = renderer.create(<App />)
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	})

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<App />).length).toEqual(1)
	})

	//enzyme .find(), .simulate(), .state()
	it('should increment by 1', ()=> {
		//The App component is shallow rendered by Enzyme.
		//Another word, it isolates the target comp so that we can only test the comp itself.
		//We don't need to consider its parent comp nor its child comp.
		let wrapper = shallow(<App />)

		//find the DOM element whose id is equal to 'counter_button'
		//and then 'click' it.
		wrapper.find('#counter_button').simulate('click')

		//here, <App />'s state is now updated and we expect it to be {counter : 1}
		expect(wrapper.state().counter).toEqual(1)

		wrapper.find('#counter_button').simulate('click')
		expect(wrapper.state().counter).toEqual(2)
	})

	//enzyme .text() .html()
	it('should render text', ()=> {
		let wrapper = shallow(<App />)
		expect(wrapper.find('#text1').text()).toEqual('Hello World')
		expect(wrapper.find('#text2').html()).toEqual('<div id="text2">This is James</div>')
	})

	//Login form
	it('should render Login form', ()=> {
		let wrapper = shallow(<App />)
		expect(wrapper.state().username).toEqual('')
		expect(wrapper.state().password).toEqual('')
		expect(wrapper.state().submit).toEqual(false)

		wrapper.find('#username').simulate('change', { target: { value: 'jamesKim0429', name: 'username'}})
		expect(wrapper.state().username).toEqual('jamesKim0429')

		wrapper.find('#password').simulate('change', { target: { value: 'jamesisHandsome', name: 'password'}})
		expect(wrapper.state().password).toEqual('jamesisHandsome')

		wrapper.find('#loginForm').simulate('submit', { preventDefault () {} })
		expect(wrapper.state().submit).toEqual(true)		
	})

	//enzyme instance().props()
	it('should render props', ()=> {
		let mock_data = [
			{
				image:"https://source.unsplash.com/280x140/?food",
				name:"mock iamge",
				rate: 5
			}
		]
		let wrapper = shallow(<App data={mock_data}/>)
		expect(wrapper.instance().props.data).toEqual(mock_data)	
	})

})
