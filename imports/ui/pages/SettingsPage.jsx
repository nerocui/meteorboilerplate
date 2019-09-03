import React from 'react';
//import { Navbar, Page, PhotoBrowser, Block, Row, Col, Button } from 'framework7-react';

export default () => (
	<Page>
		<Navbar title="Photo Browser" backLink="Back"></Navbar>
		<Block>
			<p>Photo Browser is a standalone and highly configurable component that allows to open window with photo viewer and navigation elements with the following features:</p>
			<ul>
			<li>Swiper between photos</li>
			<li>Multi-gestures support for zooming</li>
			<li>Toggle zoom by double tap on photo</li>
			<li>Single click on photo to toggle Exposition mode</li>
			</ul>
		</Block>
		<List>
			<ListItem title="Photos" link="/photos"></ListItem>
		</List>
	</Page>
);
