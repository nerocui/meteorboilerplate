import React from 'react';
import { withTracker } from "meteor/react-meteor-data";
import { withRouter, Redirect } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const Input = withStyles({
	root: {
		'& .MuiOutlinedInput-input': {
			width: '20rem',
		},
	},
})(TextField);


class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			emailErr: '',
			passwordErr: '',
			err: null,
		}
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onToggleMode = this.onToggleMode.bind(this);
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
		this.props.login({email}, password, err => {
			console.log(err);
		});
		this.resetState();
	}

	onToggleMode() {
		this.props.history.push('/signup')
	}

	resetState() {
		this.setState({email: '', password: '', emailErr: '', passwordErr: '', err: ''});
	}


	render() {
		if (this.props.loggedIn) {
			return (<Redirect to='/chatlist'/>);
		}
		return (
			<div className="page--authpage-container page">
				<h1 className="component--authpage_title">Login</h1>
				<form onSubmit={this.onSubmit} className="component--authpage-form">
					<div className="form-input">
						<Input label="Email" value={this.state.email} onChange={this.onEmailChange} variant="outlined" />
					</div>
					<div className="form-input">
						<Input label="Password" value={this.state.password} onChange={this.onPasswordChange} type="password" variant="outlined" />
					</div>
					<div>
						<Button variant="contained" color="primary" type="submit">Login</Button>
					</div>
					<div>
						<Button onClick={this.onToggleMode}>Don't have an account? Signup</Button>
					</div>
				</form>
			</div>
		);
	}
}

const LoginPageContainer =  withTracker(
	() => {
		return {
			loggedIn: Meteor.userId(),
			login: Meteor.loginWithPassword,
		};
	}
)(LoginPage);

export default withRouter(({ history }) => (
	<LoginPageContainer history={history} />
));

