import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ChatListPage from '../pages/chatListPage';
import MomentsPage from '../pages/momentsPage';
import ContactsListPage from '../pages/contactsPage';
import MePage from '../pages/mePage';
import BottomTab from '../components/bottomTab';
import { isAuthenticated } from "../../util/authUtil";

const routes = (
	<Router>
		<Switch>
			<Route exact path='/' component={LoginPage }/>
			<Route exact path='/signup' component={SignupPage} />
			<div>
				<Route
					render={({ location }) => {
						if (!isAuthenticated()) {
							return (
								<Redirect to="/" />
							);
						}
						const { pathname } = location;
						return (
							<TransitionGroup>
								<CSSTransition 
									key={pathname}
									classNames="page"
									timeout={{
										enter: 600,
										exit: 600,
									}}
								>
									<Route
										location={location}
										render={() => (
											<Switch>
												<Route exact path='/chatlist' component={ChatListPage} />
												<Route exact path='/contacts' component={ContactsListPage} />
												<Route exact path='/moments' component={MomentsPage} />
												<Route exact path='/me' component={MePage} />
											</Switch>
										)}
									/>
									</CSSTransition>
							</TransitionGroup>
						);
				}}/>
				<BottomTab/>
			</div>
		</Switch>
	</Router>
)

export default routes;
