import { Authapi } from './core';
import {Todo} from '../interface/todo'
export const createTodo = async (todo: string) => {
  const response = await Authapi.post('todos', { todo });
  return response;
};

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
