import firebaseConfig from './api_key';
import googleApi from './google_api';
import bingMapApi from './bing_map_api';
import paypalApi from './paypal';

let FIREBASE_CONFIG, GOOGLE_API, BING_MAP_API, PAYPAL_API;

if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
	FIREBASE_CONFIG = {
		apiKey: process.env.FIREBASE_API_KEY,
		authDomain: process.env.FIREBASE_AUTH_DOMAIN,
		databaseURL: process.env.FIREBASE_DATABASE_URL,
		projectId: process.env.FIREBASE_PROJECT_ID,
		storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
		appId: process.env.FIREBASE_APP_ID,
	};
	GOOGLE_API = process.env.GOOGLE_API;
	BING_MAP_API = process.env.BING_MAP_API;
	PAYPAL_API = process.env.PAYPAL_API;
} else {
	FIREBASE_CONFIG = firebaseConfig;
	GOOGLE_API = googleApi;
	BING_MAP_API = bingMapApi;
	PAYPAL_API = paypalApi;
}

export default {
	FIREBASE_CONFIG,
	GOOGLE_API,
	BING_MAP_API,
	PAYPAL_API,
};
