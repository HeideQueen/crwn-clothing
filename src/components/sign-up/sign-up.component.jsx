import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: '',
			password: '',
			confirmPassword: '',
			email: ''
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, password, confirmPassword, email } = this.state;

		if (password !== confirmPassword) {
			alert('passwords must match!');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				password: '',
				confirmPassword: '',
				email: ''
			});
		} catch (err) {
			console.log(err);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, password, confirmPassword, email } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form onSubmit={this.handleSubmit} className="sign-up-form">
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display name"
					/>
					<FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" />
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						label="Confirm password"
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
