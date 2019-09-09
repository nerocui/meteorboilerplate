import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
	console.log("[backend onCreateUser]", options, user);
	const { profile_pic } = options;
	user.profile_pic = profile_pic;
	return user;
});
