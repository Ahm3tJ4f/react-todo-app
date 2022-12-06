const Todo = ({ id, handleEdit, handleRemove, content }) => {
  return (
    <label className="list__todo">
      <input id={id} type="checkbox" className="list__input_hidden" />

      <label for={id} className="list__checkbox">
        <span className="list__content">{content}</span>
      </label>

      <div className="list__input-box">
        <label className="list__input list__input_edit" for={`${id}_edit`}>
          <i className="fa-solid fa-pen list__input_red"></i>
        </label>
        <label className="list__input list__input_remove" for={`${id}_remove`}>
          <i className="fa-solid  fa-trash list__input_red"></i>
        </label>

        <input
          className="list__input_hidden"
          type="submit"
          id={`${id}_edit`}
          onClick={handleEdit}
        />
        <input
          className="list__input_hidden"
          type="submit"
          id={`${id}_remove`}
          onClick={handleRemove}
        />
      </div>
    </label>
  );
};

export default Todo;
