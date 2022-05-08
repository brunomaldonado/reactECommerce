import React from 'react';
import '../styles/PasswordRecovery.scss';
import logo from '../assets/logos/logo_yard_sale.svg';
import { NavLink } from 'react-router-dom';

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={logo} alt="logo" className="logo_" />
				<h1 className="title">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input-login input-email" />
					{/* <input type="submit" value="Confirm" className="primary-button login-button" /> */}
					<button className="primary-button"><NavLink to="/send-email">Confirm</NavLink></button>
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;
