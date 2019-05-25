import React from 'react';

class App extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			counter: 0,
			username: '',
			password: '',
			submit: false
		}
		this.increment=this.increment.bind(this)
		this.handleChange=this.handleChange.bind(this)
		this.handleSubmit=this.handleSubmit.bind(this)
	}

	increment(){
		let curr = this.state.counter
		this.setState({counter: curr+1})
	}

	handleChange(e){
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit(e){
		e.preventDefault()
		this.setState({submit:true})
	}

	render(){
		return(
			<section>

				<div id="text1">Hello World</div>
				<div id="text2">This is James</div>
				<hr /><br />

				<div id="counter_div">
					counter : {this.state.counter} <br />
					<button id="counter_button" onClick={this.increment}>Increment</button>
				</div>

				<hr /><br />
				<div>
					<form id="loginForm" onSubmit={this.handleSubmit}>
						Username : <input type="text" id="username" name="username" onChange={this.handleChange} /><br />
						Password : <input type="password" id="password" name="password" onChange={this.handleChange} /><br />
						<button>Submit</button>
					</form>
				</div>

				<hr /><br />
				<div>
				{
					(this.props.data) &&
					this.props.data.map((item, i)=> {
						return(
							<div key={i}>
								<h1>{item.name}</h1>
								<img src={item.image} />
								<h5>rate : {item.rate}</h5>
							</div>
							)
					})
				}
				</div>

			</section>
			)
	}
}


export default App;