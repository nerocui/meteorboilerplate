import React from 'react';
import { withTracker } from "meteor/react-meteor-data";
import { connect } from 'react-redux';
import { withRouter, Redirect } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { login } from '../../actions';

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
		Meteor.loginWithPassword({email}, password, err => {
			console.log(err);
		});
		this.resetState();
		const user = Meteor.user();
		console.log('user is: ', user);
	}

	onToggleMode() {
		this.props.history.push('/signup')
	}

	resetState() {
		this.setState({email: '', password: '', emailErr: '', passwordErr: '', err: ''});
	}


	render() {
		if (this.props.logged_in) {
			return (<Redirect to='/chatlist'/>);
		}
		return (
			<div className="page--authpage-container page">
				
				<form onSubmit={this.onSubmit} className="component--authpage-form">
					<h1 className="component--authpage_title">Login</h1>
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

function mapStateToProps(state) {
	return {
		logged_in: state.AuthState.logged_in,
	};
}

const LoginPageContainer =  connect(mapStateToProps)(LoginPage);

export default withRouter(({ history }) => (
	<LoginPageContainer history={history} />
));

