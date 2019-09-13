import { Meteor } from 'meteor/meteor';
import { Accounts } from "meteor/accounts-base";

export default class DataMigration {
	constructor() {
		Migrations.add({
			version: 1,
			up: () => {
				const admins = Meteor.users.find({role: "admin"}).fetch();
				if (!admins || admins.length === 0) {
					let { email, username, password, first_name, last_name } = Meteor.settings;
					if (!(email && username && password && first_name, last_name)) {
						email = "admin";
						username = "admin";
						password = "admin";
						first_name = "admin";
						last_name = "admin";
					}
					Accounts.createUser({email, username, password, first_name, last_name});
				}
			},
			down: () => {
				Meteor.users.remove();
			}
		});
	}
}
