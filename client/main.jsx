import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import routes from '../imports/ui/routes';
import firebase from "firebase";
import KEYS from '../imports/config/keys';
 
firebase.initializeApp(KEYS.FIREBASE_CONFIG);

Meteor.startup(() => {
  render(routes, document.getElementById('react-target'));
});
