import React from 'react';
import './SignUp.css';
import './App.css';
import {Link} from "react-router-dom";
import brain from './brain.png';

class SignUp extends React.Component {
	render() {
		return (
			<div className="SignUp">
			
			<div className="Nav">
		      	<Link to="/App"><img className="Brain" src={brain} alt="" /></Link>


					<ul className="Left">
						<li className="OurStoryLi">
							<Link to="/OurStory">Our Story</Link>
						</li>

						<li className="Products">
							<Link to="/Products">Products</Link>
						</li>
					</ul>
				
					<ul className="Right">
						<li className="LogIn">
							<Link to="/LogIn">Log In</Link>
						</li>

						<li className="SignUp">
							<Link to="/SignUp">Sign Up</Link>
						</li>
					</ul>

				</div>
			








			</div>
			)
	}
}

export default SignUp; 