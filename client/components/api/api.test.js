import { getUserData } from './api';

//Important!!!
//this mocXios is not the real axios function!!!
//fake mocXios's functionality comes from '../__mocks__/axios.js'
import mocXios from 'axios';

const fakeData = {
	title: "james is handsome",
	uid: 1
}

describe('testing api calls', ()=> {
	it('getUserData should give us an object', () => {
	  expect.assertions(3)
	  expect(getUserData(mocXios)).resolves.toEqual(fakeData)
	  expect(mocXios.get).toHaveBeenCalledTimes(1)
	  expect(mocXios.get).toBeCalledWith("https://jsonplaceholder.typicode.com/todos/1")
	})
})

describe('testing api calls should fail', ()=> {
	it('should fail', () => {

	  //To make it manually failed, I re-implement a fake axios function.
	  let fakeXios = {
	  	get: jest.fn(() => Promise.reject(new Error("failed")))
	  }
	  expect.assertions(1)
	  expect(getUserData(fakeXios)).resolves.toThrow('failed')
	})
})

