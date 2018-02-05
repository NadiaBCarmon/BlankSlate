import React from 'react';
import './LogIn.css';
import { FacebookLogin } from './FacebookLogin.png';
import './App.css';
import {Link} from "react-router-dom";
import brain from './brain.png';

class LogIn extends React.Component {
	render() {
		return (
			<div className="LogIn2">

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
			
			<center>
			<div className="LogInUser">
			<input type="text" className="Username" placeholder="Username"></input>
			<input type="text" className="Password" placeholder="Password"></input>
			<input type="button" className="Submit" placeholder="Submit"></input>
			
			<input type="button" className="Facebook"></input>

			</div>
			</center>

			</div>
			)
	}
}

export default LogIn; 