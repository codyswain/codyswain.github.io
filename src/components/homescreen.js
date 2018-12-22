import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutScreen from './aboutscreen.js'
import './homescreen.css';

import printerLogo from '../assets/extruder.png';
import ionthrusterLogo from '../assets/ionthruster.svg';
import cherishlyLogo from '../assets/cherishly.svg';
import cherishlyLogo1 from '../assets/cherishly1.svg';

import squigglyImage from '../assets/squiggly.svg';
import propulsionImage from '../assets/propulsion.svg';


class HomeScreen extends Component {
	render() {
		return (
			<div className='container'>
				<div className='left-margin'>
				</div>

				<div className='main'>
					<Link to="/3dprinter">
						<ProjectButton
							title="3D Printer"
							description="A fused deposition modeling 3D printer designed in Autodesk Fusion 360 and built with T-Slotted Aluminum Extrusions"
							image={printerLogo}
							imageStyle="project-logo"
							animationImage={squigglyImage}
							animationStyle="printer-animation"
							styleClass="project-container1"
						/>
					</Link>

					<Link to="/ionthruster">
						<ProjectButton
							title="Ion Thruster"
							description="An electromagnetic propulsion engine model designed in SolidWorks 2016 and constructed using a 3D printer."
							image={ionthrusterLogo}
							imageStyle="project-logo ion-thruster-logo"
							animationImage={propulsionImage}
							animationStyle="propulsion-animation"
							styleClass="project-container2"
						/>
					</Link>

					<Link to="/cherishly">
						<ProjectButton
							title="Cherishly App"
							description="A group photo sharing application created using React Native"
							image={cherishlyLogo}
							imageStyle="project-logo cherishly-logo"
							animationImage={cherishlyLogo1}
							styleClass="project-container3"
							animationStyle="cherishly-animation"
							urlGo="google.com"
						/>
					</Link>

					<p> Check back for updates </p>
				</div>

				<div className='right-margin'>
				</div>
			</div>
		);
	}
}

function ProjectButton(props){
	return (
		<div className={props.styleClass} onClick={ChangePage(props.url)}>
			<div className='project-title'>
				<h1>{props.title}</h1>
			</div>

			<div className='project-description'>
				<p> {props.description} </p>
			</div>

			<div className='project-image'>
				<img className={props.imageStyle} src={props.image} />
				<img className={props.animationStyle} src={props.animationImage} />
			</div>
		</div>
	);
}

function ChangePage(url){

}

export default HomeScreen;