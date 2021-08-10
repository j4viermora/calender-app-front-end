import { types } from '../types/types';

// const initialState = {
// 	checking: true,
// 	uid: null,
// 	name: null,
// 	error: false,
// 	email: '',
// };

export const authReducer = (state = '', action) => {
	switch (action.type) {
		case types.authStartLogin:
			return {
				...state,
				checking: false,
				...action.payload,
			};
		case types.authStartRegister:
			return {
				...state,
				checking: false,
				...action.payload,
			};
		case types.authCheckingFinish:
			return {
				...state,
				checking: false,
			};
		case types.authLogout:
			return {
				...state,
				checking: false,
			};
		case 'startUpdateProfile':
			return {
				...state,
				cheacking: true,
			};
		case 'error':
			return {
				...state,
				error: true,
			};
		default:
			return state;
	}
};
