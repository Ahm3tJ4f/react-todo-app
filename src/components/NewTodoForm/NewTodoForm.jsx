import React, { Component } from 'react';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addTodo(this.state.todo);
		this.setState({ todo: '' });
	}

	render() {
		return (
			<form className="form NewTodoForm" onSubmit={this.handleSubmit}>
				<input
					className="form__input form__input_large"
					name="todo"
					type="text"
					value={this.state.todo}
					onChange={this.handleChange}
					required
					autoComplete="off"
					placeholder="Add a new task inside ‘All’ category"
				/>
			</form>
		);
	}
}

export default NewTodoForm;
