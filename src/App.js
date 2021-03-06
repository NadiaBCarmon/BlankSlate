import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import brain from './brain.png';
import BackgroundVideo from './BackgroundVideo.js';
import MainVid from './MainVid.mp4';

//https://firebase.google.com/docs/reference/js/firebase.auth.FacebookAuthProvider//

class App extends Component {
  render() {
    return (

    		<div className="App">


		      	<div className="Nav">
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


		      	<ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
		        
		        </ReactCSSTransitionGroup>

		        	<div className="Home">	

		        	<div className="Title">
		        	<h1>Blank Slate</h1>
		        	</div>

		        	<div className="Tagline">
		        	<p>Life, Unplugged</p>
		        	</div>
		   
		   			</div>


				
	 		</div>

    );
  }
}


export default App;
