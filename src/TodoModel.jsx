import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useTodoModel = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, todo: updatedTodo } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const toggleTodoCompletion = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodoCompletion,
  };
};

export default useTodoModel;
