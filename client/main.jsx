import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import routes from '../imports/ui/routes';
import firebase from "firebase";
import firebaseConfig from '../imports/config/api_key';
 
firebase.initializeApp(firebaseConfig);

Meteor.startup(() => {
  render(routes, document.getElementById('react-target'));
});
