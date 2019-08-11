import React from 'react';
import { withRouter } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChatIconOutline from '@material-ui/icons/ChatBubbleOutline';
import ContactIconOutline from '@material-ui/icons/ContactsOutlined';
import MomentIconOutline from '@material-ui/icons/ShareOutlined';
import MeIconOutline from '@material-ui/icons/PersonOutline';

import ChatIcon from '@material-ui/icons/ChatBubble';
import ContactIcon from '@material-ui/icons/Contacts';
import MomentIcon from '@material-ui/icons/Share';
import MeIcon from '@material-ui/icons/Person';

class BottomTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: 'chatlist',
		}
		this.handleChange = this.handleChange.bind(this);
		this.getIcon = this.getIcon.bind(this);
		this.getIconChosen = this.getIconChosen.bind(this);
		this.getIconOutline = this.getIconOutline.bind(this);
	}

	handleChange(event, newValue) {
		this.props.history.push(`/${newValue}`);
		this.setState({tab: newValue});
	}

	getIconChosen(value) {
		switch(value) {
			case 'chatlist':
				return <ChatIcon />;
			case 'contacts':
				return <ContactIcon />;
			case 'moments':
				return <MomentIcon />;
			case 'me':
				return <MeIcon />;
			default:
				return <ChatIcon />;
		}
	}

	getIconOutline(value) {
		switch(value) {
			case 'chatlist':
				return <ChatIconOutline />;
			case 'contacts':
				return <ContactIconOutline />;
			case 'moments':
				return <MomentIconOutline />;
			case 'me':
				return <MeIconOutline />;
			default:
				return <ChatIconOutline />;
		}
	}

	getIcon(value) {
		if (this.state.tab === value) {
			return this.getIconChosen(value);
		} else {
			return this.getIconOutline(value);
		}
	}

	render() {
		return (
			<div className="component--bottom-tab">
				<BottomNavigation value={this.state.tab} onChange={this.handleChange}>
					<BottomNavigationAction label="Chats" icon={this.getIcon('chatlist')} value="chatlist" />
					<BottomNavigationAction label="Contacts" icon={this.getIcon('contacts')} value="contacts" />
					<BottomNavigationAction label="Moments" icon={this.getIcon('moments')} value="moments" />
					<BottomNavigationAction label="Me" icon={this.getIcon('me')} value="me" />
				</BottomNavigation>
			</div>
		);
	}
}

export default withRouter(({ history }) => (
	<BottomTab history={history} />
));
