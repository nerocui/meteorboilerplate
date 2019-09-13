import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Routes from '../imports/ui/routes';
import firebase from "firebase";
import KEYS from '../imports/config/keys';
import rootReducer from '../imports/reducers';

const store = createStore(rootReducer);
firebase.initializeApp(KEYS.FIREBASE_CONFIG);

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Routes />
    </Provider>
    ,
    document.getElementById('react-target')
  );
});
