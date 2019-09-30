import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import './App1.css';
import SimpleCard from './components/Card';
import { TextField } from '@material-ui/core';

class App extends Component {
	state = {
		loggedIn: false,
		notifications: []
	};

	login = () => {
		this.setState({
			loggedIn: true
		});
	};
	render() {
		return this.state.loggedIn ? (
			<div>
				<AppBar color="primary" position="sticky">
					<Toolbar>
						<TypoGraphy variant="title" color="inherit">
							My Music App
						</TypoGraphy>
					</Toolbar>
				</AppBar>

				<SimpleCard />
				<h1>Notifications: It is working no need to check it!!</h1>
				{/* <Notifications /> */}
			</div>
		) : (
			<form className="login" onSubmit={this.login}>
				<TextField
					className="username"
					required
					id="standard-username-input"
					label="Username"
					type="username"
					autoComplete="current-username"
					margin="normal"
				/>
				<TextField
					className="password"
					required
					id="standard-password-input"
					label="Password"
					type="password"
					autoComplete="current-password"
					margin="normal"
				/>
				<button className="submitButton" type="submit">
					Submit
				</button>
			</form>
		);
	}
}
export default App;
