import React, { Component } from 'react';
import home from './home.jpg';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import { Text, View, Image, StyleSheet, } from 'react-native';
//import { Constants } from 'expo';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import brain from './brain.png';

class App extends Component {
  render() {
    return (
      <div className="App">

    <div className="Navbar">
	<Navbar inverse collapseOnSelect>
		<Navbar.Header className="Header">
			<Navbar.Brand className="BackHome" >
				<a href="App.js"><img className="Brain" src={brain}/></a>
			</Navbar.Brand>
		</Navbar.Header>
		<Navbar.Collapse>

			<Nav>

				<NavItem className="OurStory" eventKey={1} href="">
					Our Story
				</NavItem>

				<NavItem className="Products" eventKey={2} href="#">
					Products
				</NavItem>
			</Nav>

			<Nav pullRight>
				<NavItem className="LogIn" eventKey={3} href="#">
					Log In
				</NavItem>

				<NavItem className="SignUp" eventKey={4} href="#">
					Sign Up
				</NavItem>
			</Nav>

		</Navbar.Collapse>

	</Navbar>
	</div>


      	<ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        </ReactCSSTransitionGroup>

        	<img className="Home" src={home} alt="Welcome to Blank Slate" />

        	<div className="Title">
        	<h1>Blank Slate</h1>
        	</div>

        	<div className="Tagline">
        	<p>Peace, Unplugged</p>
        	</div>
   
  				
	 </div>

    );
  }
}



export default App;
