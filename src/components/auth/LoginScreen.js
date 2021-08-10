import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import useForm from '../../hooks/useForm';
import { startLogin, startRegister } from '../../actions/auth';
import './login.css';

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const [valueLogin, handleLoginInputChange] = useForm({
		loginEmail: '',
		loginPassword: '',
	});
	const [valueRegister, handleRegisterInputChange] = useForm({
		Registername: '',
		RegisterEmail: '',
		RegisterPassword1: '',
		RegisterPassword2: '',
	});

	const { Registername, RegisterEmail, RegisterPassword1, RegisterPassword2 } =
		valueRegister;

	const { loginEmail, loginPassword } = valueLogin;

	const handlerLogin = (e) => {
		e.preventDefault();
		dispatch(startLogin(loginEmail, loginPassword));
	};

	const handleRegister = (e) => {
		e.preventDefault();

		if (RegisterPassword1 !== RegisterPassword2) {
			return Swal.fire({
				icon: 'error',
				title: 'Oops',
				text: 'Las contraseñas no coinciden',
			});
		}

		dispatch(startRegister(Registername, RegisterEmail, RegisterPassword1));
	};

	return (
		<div className="container login-container">
			<div className="row">
				<div className="col-md-6 login-form-1">
					<h3>Ingreso</h3>
					<form onSubmit={handlerLogin}>
						<div className="form-group mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Correo"
								name="loginEmail"
								value={loginEmail}
								onChange={handleLoginInputChange}
							/>
						</div>
						<div className="form-group mb-3">
							<input
								type="password"
								className="form-control"
								placeholder="Contraseña"
								name="loginPassword"
								value={loginPassword}
								onChange={handleLoginInputChange}
							/>
						</div>
						<div className="form-group">
							<input type="submit" className="btnSubmit" value="Login" />
						</div>
					</form>
				</div>

				<div className="col-md-6 login-form-2">
					<h3>Registro</h3>
					<form onSubmit={handleRegister}>
						<div className="form-group mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Nombre"
								name="Registername"
								value={Registername}
								onChange={handleRegisterInputChange}
							/>
						</div>
						<div className="form-group mb-3">
							<input
								type="email"
								className="form-control"
								placeholder="Correo"
								name="RegisterEmail"
								value={RegisterEmail}
								onChange={handleRegisterInputChange}
							/>
						</div>
						<div className="form-group mb-3">
							<input
								type="password"
								className="form-control"
								placeholder="Contraseña"
								name="RegisterPassword1"
								value={RegisterPassword1}
								onChange={handleRegisterInputChange}
							/>
						</div>

						<div className="form-group mb-3">
							<input
								type="password"
								className="form-control"
								placeholder="Repita la contraseña"
								name="RegisterPassword2"
								value={RegisterPassword2}
								onChange={handleRegisterInputChange}
							/>
						</div>

						<div className="form-group">
							<input type="submit" className="btnSubmit" value="Crear cuenta" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
