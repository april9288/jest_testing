import React from 'react';
import { getUserData } from './api/api.js';
import axios from 'axios';

class Bpp extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			data: null,
			error: false
		}
		this.updateUserData=this.updateUserData.bind(this)
	}

	componentDidMount(){
		this.updateUserData()
	}

	updateUserData(){
		getUserData(axios)
		.then(data => this.setState({data}))
		.catch(e=> this.setState({error:true}))
	}

	render(){
		// console.log("state : ", this.state.data)
		return(
			<section>
			{
				(this.state.data) &&
				(
					<div>
						<p>todo : {this.state.data.title}</p>
						<p>completed : {String(this.state.data.completed)}</p>
					</div>
				)
			}
			<hr /><br />
			</section>
			)
	}
}


export default Bpp;