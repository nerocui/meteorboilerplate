import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx";
import AuthPage from "../pages/authPage";
import ChatListPage from '../pages/chatListPage';
import ChatThreadPage from '../pages/chatThreadPage';
import MomentsPage from '../pages/momentsPage';
import ContactsListPage from '../pages/contactsPage';
import MePage from '../pages/mePage';
import BottomTab from '../components/bottomTab';

const routes = (
	<Router>
		<div>
			<Switch>
				<Route exact path='/' component={AuthPage }/>
				<div>
					<Switch>
						<PrivateRoute exact path='/chatlist' component={ChatListPage} />
						<PrivateRoute exact path='/chatthread' component={ChatThreadPage} />
						<PrivateRoute exact path='/contacts' component={ContactsListPage} />
						<PrivateRoute exact path='/moments' component={MomentsPage} />
						<PrivateRoute exact path='/me' component={MePage} />
					</Switch>
					<BottomTab/>
				</div>
			</Switch>
		</div>
	</Router>
)

export default routes;
