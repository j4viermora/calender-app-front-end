import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { customStyles } from '../calendar/CalendarModal';
import { startUpdate } from '../../actions/auth';

export default function ModalProfile({ show, close }) {
	const { name, email } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const [form, handleForm] = useForm({
		newEmail: '',
		newName: '',
		password: '',
		repeatPassword: '',
	});

	const { newEmail, newName, password, repeatPassword } = form;

	const handlerUpdate = () => {
		if (password === repeatPassword) {
			dispatch(
				startUpdate({
					email: newEmail,
					newName: name,
					password,
				})
			);
		} else {
			alert('las contraseñas no son iguales');
		}
	};

	return (
		<Modal
			isOpen={show}
			// onRequestClose={closeModal}
			style={customStyles}
			closeTimeoutMS={200}
			className="modal"
			overlayClassName="modal-fondo"
		>
			<div className="p-3">
				<h2 className="text-center mb-3">Información de perfil</h2>
				<form>
					<label htmlFor="exampleFormControlInput1" className="form-label">
						Email
					</label>
					<input
						onChange={handleForm}
						value={newEmail}
						type="email"
						placeholder={email}
						name="newEmail"
						className="mb-3 form-control"
					/>
					<label htmlFor="exampleFormControlInput1" className="form-label">
						Name
					</label>
					<input
						onChange={handleForm}
						value={newName}
						type="text"
						placeholder={name}
						name="newName"
						className="mb-3 form-control"
					/>
					<label htmlFor="exampleFormControlInput1" className="form-label">
						Contraseña
					</label>
					<input
						onChange={handleForm}
						value={password}
						type="password"
						placeholder="Nueva contraseña"
						name="password"
						className="mb-3 form-control"
					/>
					<label htmlFor="exampleFormControlInput1" className="form-label">
						Repetir contraseña
					</label>
					<input
						onChange={handleForm}
						value={repeatPassword}
						type="password"
						placeholder="Repite la nueva contraseña"
						name="repeatPassword"
						className="mb-3 form-control"
					/>
				</form>
				<div>
					<button className="btn btn-primary" onClick={handlerUpdate}>
						Guardar
					</button>
					<button className="btn btn-outline-danger mx-3" onClick={close}>
						Cancelar
					</button>
				</div>
			</div>
		</Modal>
	);
}
