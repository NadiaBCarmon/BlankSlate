import React from 'react';
import './OurStory.css';
import OurStoryVR from './OurStoryVR.jpg';
import {Link} from "react-router-dom";
import brain from './brain.png';

class OurStory extends React.Component {
	render() {
		return(

			<div className="OurStory">
			<div className="Nav2">
		      	<Link to="/"><img className="Brain" src={brain} alt="" /></Link>


					<ul className="Left">
						<li className="OurStoryLi">
							<Link to="/OurStory">Our Story</Link>
						</li>

						<li className="Products">
							Products
						</li>
					</ul>
				
					<ul className="Right">
						<li className="LogIn">
							<Link to="/LogIn">Log In</Link>
						</li>

						<li className="SignUp">
							Sign Up
						</li>
					</ul>

				</div>


			<img className="OurStoryVR" src={OurStoryVR} alt=" " />

			</div>
		)
	}
}

export default OurStory;