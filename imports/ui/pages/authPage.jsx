import React from 'react';
import { withTracker } from "meteor/react-meteor-data";
import {Tracker} from 'meteor/tracker';
import { withRouter } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AuthPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			emailErr: '',
			passwordErr: '',
			err: null,
			mode: 'login'
		}
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onToggleMode = this.onToggleMode.bind(this);
	}

	componentDidMount() {
		this.tracker = Tracker.autorun(() => {
			if (Meteor.userId()) {
				this.props.history.push('/chatlist');
			}
		});
	}

	componentWillUnmount() {
		this.tracker.stop();
	}

	onEmailChange(e) {
		this.setState({email: e.target.value});
	}

	onPasswordChange(e) {
		this.setState({password: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
		const email = this.state.email;
		const password = this.state.password;
		console.log(this.state);
		if (this.state.mode === 'login') {
			this.props.login({email}, password, err => {
				console.log(err);
			});
		} else {
			this.props.createUser({email, password}, err => {
				console.log(err);
			})
		}
		this.resetState();
	}

	onToggleMode() {
		const {mode} = this.state;
		this.setState({mode: mode === 'login' ? 'signup' : 'login'});
		this.resetState();
	}

	resetState() {
		this.setState({email: '', password: '', emailErr: '', passwordErr: '', err: ''});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<TextField label="Email" value={this.state.email} onChange={this.onEmailChange} />
					<TextField label="Password" value={this.state.password} onChange={this.onPasswordChange} type="password"/>
					<Button type="submit">{this.state.mode === 'login' ? 'Login' : 'Signup'}</Button>
					<Button onClick={this.onToggleMode}>{this.state.mode === 'login' ? "Don't have an account? Signup" : "Already have an account? Login"}</Button>
				</form>
			</div>
		);
	}
}

const AuthPageContainer =  withTracker(
	() => {
		return {
			createUser: Accounts.createUser,
			login: Meteor.loginWithPassword,
		};
	}
)(AuthPage);

export default withRouter(({ history }) => (
	<AuthPageContainer history={history} />
));

