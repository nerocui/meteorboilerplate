import React from 'react';
//import { App, Panel, View, Statusbar } from 'framework7-react';
import routes from './routes';

const AppPage = (props) => {
	let theme = 'auto';
	const f7Params = {
	  id: 'io.framework7.testapp',
	  theme,
	  routes,
	};
	return (
	  <App params={ f7Params }>
		<Statusbar />
		<View url="/" main className="safe-areas" masterDetailBreakpoint={800} />
	  </App>
	);
  };
  
  export default AppPage;
