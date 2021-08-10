import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import ModalProfile from './ModalProfile';
// import { clearEventLogout } from '../../actions/events'

export const Navbar = () => {
	const { name } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(startLogout());
		// dispatch( clearEventLogout() )
	};

	const handleProfileModal = () => {
		setOpen(true);
	};
	const handlerClose = () => {
		setOpen(false);
	};

	return (
		<>
			<ModalProfile show={open} close={handlerClose} />
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<span className="navbar-brand" href="#">
						Hola {name}
					</span>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNav"
					>
						<ul className="navbar-nav">
							<li className="nav-item mx-3">
								<button
									onClick={handleProfileModal}
									className="btn btn-primary"
									href="#"
								>
									Mi perfil
								</button>
							</li>
							<li className="nav-item">
								<button
									className="btn btn-outline-danger"
									onClick={handleLogout}
								>
									<i className="fas fa-sign-out-alt"></i>
									<span> Salir</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
