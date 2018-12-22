import React, { Component } from 'react';
import './aboutscreen.css';
import profilePic from '../assets/me.jpg'

class AboutScreen extends Component {
	render() {
		return (
			<div className="container">
				<div className="left-margin"></div>

				<div className="main">
					<div className="bioContainer">
						<h1>About me</h1>
						<p>
							I'm currently a 3rd year undergrad
							studying Computer Science and Engineering at UCLA. I spent the 
							past two summers interning at a San Francisco 
							based startup called iBeat, which is developing a 
							smart watch capable of continually monitoring vital signs 
							and alerting medical authorities in the event of a 
							life-threatening condition. I aided in the 
							construction of a complex data pipeline which utilized 
							multiple AWS services, and I built and managed a 
							Postgresql database. While this previous experience is
							probably best categorized as "data engineering", my main
							interest lies in deep learning research and development. 
							I want to explore how computer vision, and deep learning
							models may be used in the control of robotics and other
							complex mechanical systems.
						</p>
					</div>

					<div className="picContainer">
						<img src={profilePic} />
					</div>

					<div className="bioContainer">
						<p>
							Outside of programming, I enjoy spending time outdoors
							(mostly rock climbing but also surfing and backpacking),
							reading, and getting involved around campus. This last semester
							I was a member of the Bruin Entrepreneurs board, and I 
							participated in a club called Creative Labs, to help build a 
							"smart mirror". 
						</p>
					</div>

				</div>

				<div className="right-margin"></div>
			</div>
		);
	}
}

export default AboutScreen;