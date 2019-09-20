import React, { Component } from 'react';
import './menu.css';

export default class Menu extends React.Component{
	render(){
		return(
			<nav className="navbar">
				<a href='#' className='navbar-brand'><i className="fa fa-linode"></i> Lincode</a>
				<ul className='navbar-nav'>
					<li className="nav-item"><a href='#' className="nav-link">Home</a></li>
					<li className="nav-item"><a href='#' className="nav-link">Abaunt</a></li>
					<li className="nav-item"><a href='#' className="nav-link">Contact</a></li>
					<li className="nav-item">
						<a href='#' className="nav-link">
							Sign Out <i className="fa fa-sign-out"></i>
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
