import { Authapi } from './core';
export const createTodo = async (todo: string) => {
  const response = await Authapi.post('todos', { todo });
  return response;
};
interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export const getTodo = async () => {
  const response = await Authapi.get('todos');
  return response;
};

export const deleteTodo = async (id: number) => {
  const response = await Authapi.delete(`todos/${id}`);
  return response;
};

export const updateTodo = async (todo: Todo) => {
  const response = await Authapi.put(`todos/${todo.id}`, {
    todo: todo.todo,
    isCompleted: todo.isCompleted,
  });
  return response;
};
