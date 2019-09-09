import React from 'react';
import { withTracker } from "meteor/react-meteor-data";
import { withRouter, Redirect } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CameraPage from './CameraPage';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';

const Input = withStyles({
	root: {
		'& .MuiOutlinedInput-input': {
			width: '20rem',
		},
	},
})(TextField);


class AuthPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			emailErr: '',
			passwordErr: '',
			err: null,
			mode: 'login',
			cameraOpen: false,
			cameraReady: false,
		}
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onToggleMode = this.onToggleMode.bind(this);

		this.onTakePhoto = this.onTakePhoto.bind(this);
		this.onCameraError = this.onCameraError.bind(this);
		this.onCameraStart = this.onCameraStart.bind(this);
		this.onCameraStop = this.onCameraStop.bind(this);
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
		this.setState({email: '', password: '', emailErr: '', passwordErr: '', err: '', cameraOpen: false});
	}

	onTakePhoto(dataUri) {
		console.log('Photo taken', dataUri);
		this.setState({cameraOpen: false});
	}

	onCameraError(error) {
		console.log('camera error: ', error);
	}

	onCameraStart(stream) {
		console.log('camera started: ', stream);
		this.setState({cameraReady: true});
	}

	onCameraStop() {
		console.log('camera stopped');
		this.setState({cameraOpen: false, cameraReady: false});
	}

	render() {
		if (this.props.loggedIn) {
			return (<Redirect to='/chatlist'/>);
		}
		return (
			<div className="page--authpage-container page">
				{
					this.state.mode === 'login' ?
					(<h1 className="component--authpage_title">Login</h1>) : (<h1 className="component--authpage_title">Signup</h1>)
				}
				{
					this.state.cameraOpen ||
					<React.Fragment>
						<div>
							<button onClick={() => this.setState({cameraOpen: true})}>Open Camera</button>
						</div>
						<form onSubmit={this.onSubmit} className="component--authpage-form">
							<div className="form-input">
								<Input label="Email" value={this.state.email} onChange={this.onEmailChange} variant="outlined" />
							</div>
							<div className="form-input">
								<Input label="Password" value={this.state.password} onChange={this.onPasswordChange} type="password" variant="outlined" />
							</div>
							<div>
								<Button variant="contained" color="primary" type="submit">{this.state.mode === 'login' ? 'Login' : 'Signup'}</Button>
							</div>
							<div>
								<Button onClick={this.onToggleMode}>{this.state.mode === 'login' ? "Don't have an account? Signup" : "Already have an account? Login"}</Button>
							</div>
						</form>
					</React.Fragment>
				}
				<CameraPage
					isOpen={this.state.cameraOpen}
					onTakePhoto={this.onTakePhoto}
					onCameraError={this.onCameraError}
					onCameraStart={this.onCameraStart}
					onCameraStop={this.onCameraStop}
				/>
			</div>
		);
	}
}

const AuthPageContainer =  withTracker(
	() => {
		return {
			loggedIn: Meteor.userId(),
			createUser: Accounts.createUser,
			login: Meteor.loginWithPassword,
		};
	}
)(AuthPage);

export default withRouter(({ history }) => (
	<AuthPageContainer history={history} />
));

