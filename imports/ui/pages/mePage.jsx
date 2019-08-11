import React from 'react';
import {Tracker} from 'meteor/tracker';
import { withRouter } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";
import { Button } from '@material-ui/core';
import { Meteor } from 'meteor/meteor';

class MePage extends React.Component {
	constructor(props) {
		super(props);
		this.onLogout = this.onLogout.bind(this);
	}

	componentDidMount() {
		this.tracker = Tracker.autorun(() => {
			if (!Meteor.userId()) {
				this.props.history.push('/');
			}
		})
	}

	componentWillUnmount() {
		this.tracker.stop();
	}

	onLogout() {
		Accounts.logout();
	}

	render() {
		return (
			<div>
				<Button onClick={this.onLogout}>Log Out</Button>
			</div>
		);
	}
}

export default withRouter(({ history }) => (
	<MePage history={history} />
));
