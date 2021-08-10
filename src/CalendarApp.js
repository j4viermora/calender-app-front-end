import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { store } from './store/store';
import { AppRouter } from './router/AppRouter';

export const CalendarApp = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};
