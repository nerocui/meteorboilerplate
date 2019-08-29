import Pages from './pages';

export default [
	{
		path:'/',
		component: Pages.ListPage,
	},
	{
		path: '/cards',
		component: Pages.CardsPage,
	},
	{
		path: '/another',
		component: Pages.AnotherPage,
	},
	{
		path: '/settings',
		component: Pages.SettingsPage,
	},
];
