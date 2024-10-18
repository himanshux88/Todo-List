const TodoController = (model) => {
  const handleAddTodo = (todo) => {
    if (todo.length > 3) {
      model.addTodo(todo);
    }
  };

  const handleEditTodo = (id, newTodo) => {
    model.updateTodo(id, newTodo);
  };

  const handleDeleteTodo = (id) => {
    model.deleteTodo(id);
  };

  const handleToggleCompletion = (id) => {
    model.toggleTodoCompletion(id);
  };

  return {
    handleAddTodo,
    handleEditTodo,
    handleDeleteTodo,
    handleToggleCompletion,
  };
};

export default TodoController;
