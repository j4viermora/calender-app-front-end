import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import { clearEventLogout } from './events';

export const startLogin = (email, password) => {
	return async (dispatch) => {
		const resp = await fetchWithoutToken('auth', { email, password }, 'POST');
		const body = await resp.json();

		console.log(body, 'from star login');

		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(
				login({
					uid: body.uid,
					name: body.name,
					email: body.email,
				})
			);
		} else {
			Swal.fire('Error', body.msg, 'error');
		}
	};
};

export const startRegister = (name, email, password) => {
	return async (dispatch) => {
		const resp = await fetchWithoutToken(
			'auth/new',
			{ name, email, password },
			'POST'
		);
		const body = await resp.json();

		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('token-init-time', new Date().getTime());

			dispatch(
				register({
					name: body.name,
					uid: body.uid,
				})
			);

			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Registro exitoso',
				showConfirmButton: false,
				timer: 1500,
			});
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Algo anda mal',
				text: body.msg,
			});
		}
	};
};

export const startChecking = () => {
	return async (dispatch) => {
		const resp = await fetchWithToken('auth/renew');
		const body = await resp.json();

		console.log(body, 'from star cheaking');

		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(
				login({
					uid: body.uid,
					name: body.name,
					email: body.email,
				})
			);
		}
	};
};

const login = (user) => {
	return {
		type: types.authStartLogin,
		payload: user,
	};
};

export const startLogout = () => {
	return (dispatch) => {
		localStorage.clear();
		dispatch(logout());
		dispatch(clearEventLogout());
	};
};

const logout = () => ({
	type: types.authLogout,
});

const register = (newUser) => {
	return {
		type: types.authStartLogin,
		payload: newUser,
	};
};

// const checkingFinish = () => ({
// 	type: types.authCheckingFinish,
// });

export const startUpdate = (data) => {
	return async (dispatch, getState) => {
		try {
			if (data.password === '') {
				const resp = await fetchWithToken(
					'auth/profile',
					{ email: data.email, name: data.email },
					'POST'
				);
				const body = await resp.json();
			}
			const resp = await fetchWithToken('auth/renew');
			console.log(data, 'other');
		} catch (err) {}
	};
};
