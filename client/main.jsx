import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import AppPage from '../imports/ui/App';

import Framework7 from 'framework7';
import * as Framework7React from 'framework7-react';
import '../node_modules/framework7/css/framework7.min.css';


Framework7.use(Framework7React);

Meteor.startup(() => {
  render(<AppPage />, document.getElementById('react-target'));
});
