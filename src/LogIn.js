import React from 'react';
import './LogIn.css';
import { FacebookLogin } from './FacebookLogin.png';
import {Link} from "react-router-dom";
import brain from './brain.png';

class LogIn extends React.Component {
	render() {
		return (
			<div className="LogIn2">
			<div className="VRLogIn">

			<div className="Nav4">
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
			
			<center>
			<div className="LogInUser">
			<h2 className="LogInText">Sign In</h2>
			<div className="LogInUser2">
			<input type="text" className="Username" value="euphoria@blankslate.com"></input>
			<input type="text" className="Password" value="*******"></input>
			<input type="button" className="Submit" value="Login"></input>
			
			<input type="button" className="Facebook"></input>

			</div>
			</div>
			</center>

			</div>
			</div>
			)
	}
}

export default LogIn; 