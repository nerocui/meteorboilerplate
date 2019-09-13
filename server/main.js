import { Meteor } from 'meteor/meteor';
import '../imports/api/user';
import App from './App';

Meteor.startup(() => {
  const app = new App();
  app.useMigrator();
});
