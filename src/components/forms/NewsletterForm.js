import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

class NewsletterForm extends Component {
	constructor(props) {
		super(props);
		this.state = { email: '' };
	}

	render() {
		const { className, submit = 'Submit' } = this.props;
		const { email } = this.state;

		return (
			<form
				className={classnames(
					'newsletter-form field field-grouped is-revealing',
					className
				)}
			>
				{/* <div className="control control-expanded">
					<input
						className="input"
						type="email"
						name="email"
						placeholder="Your best email&hellip;"
					/>
				</div> */}
				<div className="control">
					{/* eslint-disable-next-line */}
					<NavLink to="/questionnaire" activeClassName="is-active" style={{ textDecoration: 'none' }}>
						<button
							className="button button-primary button-block button-shadow"
							type="submit"
						>
							{submit}
						</button>
					</NavLink>
				</div>
			</form>
		);
	}
}

export default NewsletterForm;
