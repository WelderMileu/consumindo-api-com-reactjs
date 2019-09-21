import React, { Component } from 'react';
import './style.css';

export default class Pokemon extends Component{
	constructor(props){
		super(props)
		this.state = {
			items:[],
			isLoaded:false,
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(json => {
			this.setState({
				isLoaded: true,
				items: json,
			});
		});
	}

	render(){

		var { isLoaded, items } = this.state;

		if(!isLoaded){
			return <div> Warning Information ... </div>;
		}else{
			return(
				<div className="container">
					<h3>Consumindo uma Api com React JS</h3>
					<p className="api">https://jsonplaceholder.typicode.com/users</p>
					<br/>
					<ul>
						{ items.map(item => (
							<li key={item.id}>
								{item.name} || {item.email}
							</li>
						))}
					</ul>
				</div>
			);
		}

	}
}