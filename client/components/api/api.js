import axios from 'axios';

export const getUserData = (axios) => {
	return axios.get("https://jsonplaceholder.typicode.com/todos/1")
	.then(data => data.data)
	.catch(e=> e)
}