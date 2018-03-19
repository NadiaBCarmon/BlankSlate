import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import brain from './brain.png';
import StannDroid from './StannDroid.jpg';

class Products extends React.Component {
	render() {
		return (
			<div className="Products">


			<div className="Nav3">
		      	<Link to="/"><img className="Brain" src={brain} alt="" /></Link>


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

				<img className="StannDroid" src={StannDroid} alt="" />
			</div>
			)
	}
}

export default Products; 