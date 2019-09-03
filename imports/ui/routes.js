import Pages from './pages';
import PhotosPage from './components/Photos';

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
	{
		path: '/photos',
		component: PhotosPage,
	},
];
