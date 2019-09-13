import TYPES from './type';

export function login(user) {
	return {
		type: TYPES.LOGIN,
		payload: user
	};
}

export function logout() {
	return {
		type: TYPES.LOGOUT
	};
}
