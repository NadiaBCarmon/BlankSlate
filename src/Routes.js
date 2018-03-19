import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import OurStory from './OurStory';
import Products from './Products';
import LogIn from './LogIn';
import SignUp from './SignUp';

class Routes extends React.Component {

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/OurStory" component={OurStory} />
					
					<Route exact path= "/LogIn" component={LogIn} />
				

					

				</Switch>
			</Router>

			)
	}

}

export default Routes;