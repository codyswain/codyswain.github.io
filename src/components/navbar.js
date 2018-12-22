import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './navbar.css';

class Navbar extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className='navbar'>
				<div className='navbar-left'>
					<NavbarTitle name="Cody Swain" />
				</div>
				<div className='navbar-center'>
					<Link to="/">
						<NavbarItem name='Home' />
					</Link>

					<Link to="/resume">
						<NavbarItem name='Resume' />
					</Link>

					<Link to="/about">
						<NavbarItem name='About' />
					</Link>
				</div>
			</div>
		)
	}
}

function NavbarTitle(props){
	return (
		<div className="navbar-title">
			{props.name}
		</div>
	);
}

// function NavbarTitleIcon(props){
// 	return (
// 		<div className="navbar-title-icon">
// 			{props.name}
// 		</div>
// 	);
// }

function NavbarItem(props){
	return (
		<div className='navbar-button'>
			{ props.name }
		</div>
	);
}

export default Navbar;