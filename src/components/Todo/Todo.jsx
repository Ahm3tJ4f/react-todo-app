import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      content: this.props.content,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSave(e) {
    this.handleEdit(e);
    this.props.saveChange(this.props.id, this.state.content);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState((state) => {
      return { isEdit: !state.isEdit };
    });
  }

  render() {
    return (
      <li className="Todo">
        {!this.state.isEdit ? (
          <label className="list__todo">
            <input
              id={this.props.id}
              type="checkbox"
              className="list__input_hidden"
            />

            <label for={this.props.id} className="list__checkbox">
              <span className="list__content">{this.props.content}</span>
            </label>

            <div className="list__input-box">
              <label className="list__input list__input_edit" for={`${this.props.id}_edit`}>
                <i className="fa-solid fa-pen list__input_red"></i>
              </label>
              <label className="list__input list__input_remove" for={`${this.props.id}_remove`}>
                <i className="fa-solid  fa-trash list__input_red"></i>
              </label>

              <input
                className="list__input_hidden"
                type="submit"
                id={`${this.props.id}_edit`}
                onClick={this.handleEdit}
              />
              <input
                className="list__input_hidden"
                type="submit"
                id={`${this.props.id}_remove`}
                onClick={this.handleRemove}
              />
            </div>
          </label>
        ) : (
          <label className="list__edit">
            <input
              id={this.props.id}
              type="checkbox"
              className="list__input_hidden"
            />
            <label for={this.props.id} className="list__checkbox"></label>

            <input
                name="content"
                type={'text'}
                value={this.state.content}
                onChange={this.handleChange}
                className = 'form__input form__input_small'
              />

              <input
                className="list__input list__input_primary "
                type="submit"
                value="SAVE"
                onClick={this.handleSave}
              />
          </label>
        )}
      </li>
    );
  }
}

export default Todo;
