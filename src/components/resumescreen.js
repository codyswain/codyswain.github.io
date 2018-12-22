import React, { Component } from 'react';
import './resumescreen.css';
import resume from '../assets/resume.jpg';

class ResumeScreen extends Component {
	render() {
		return (
			<div className="container">
				<div className="main">
					<img src={resume} />
				</div>
			</div>
		);
	}
}

export default ResumeScreen;