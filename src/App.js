import React, { Component } from 'react';
//import home from './home.jpg';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import { Text, View, Image, StyleSheet, } from 'react-native';
//import { Constants } from 'expo';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import brain from './brain.png';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className="Nav">
      	<a href="App.js"><img className="Brain" src={brain} /></a>


			<ul className="Left">
				<li className="OurStory" eventKey={1}>
					<a href="OurStory.js">Our Story</a>
				</li>

				<li className="Products" eventKey={2}>
					<a href="Products.js">Products</a>
				</li>
			</ul>
		
			<ul className="Right">
				<li className="LogIn" eventKey={3}>
					<a href="Login.js">Log In</a>
				</li>

				<li className="SignUp" eventKey={4}>
					<a href="Signup.js">Sign Up</a>
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
