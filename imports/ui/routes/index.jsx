import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LoginPage from "../pages/LoginPage";
import ChatListPage from '../pages/chatListPage';
import MomentsPage from '../pages/momentsPage';
import ContactsListPage from '../pages/contactsPage';
import MePage from '../pages/mePage';
import BottomTab from '../components/bottomTab';
import { isAuthenticated } from "../../util/authUtil";
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import { login, logout } from '../../actions';

const history = createBrowserHistory();

class Routes extends React.Component {


	render() {
		if (this.props.user) {
			console.log('in login');
			this.props.login(this.props.user);
		} else {
			console.log('in here logout');
			this.props.logout();
		}
		return (
			<Router history={history}>
				<Switch>
					<Route exact path='/' component={LoginPage }/>
					<div>
						<Switch>
							<PrivateRoute exact path='/chatlist' component={ChatListPage} />
							<PrivateRoute exact path='/contacts' component={ContactsListPage} />
							<PrivateRoute exact path='/moments' component={MomentsPage} />
							<PrivateRoute exact path='/me' component={MePage} />
						</Switch>
						<BottomTab/>
					</div>
				</Switch>
			</Router>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		login: user => dispatch(login(user)),
		logout: () => dispatch(logout()),
	};
}

const ConnectedRoutes = connect(null, mapDispatchToProps)(Routes);

export default withTracker(() => {
	return {
		user: Meteor.user(),
	};
})(ConnectedRoutes);
