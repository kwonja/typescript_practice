import { Authapi } from './core';
import { Todo } from '../interface/todo';
import axios from 'axios';
export const createTodo = async (todo: string) => {
  const response = await Authapi.post('todos', { todo });
  return response;
};

export const getTodo = async () => {
  try{
    const response = await Authapi.get('todos');
    return response;
  }catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      if (!err.response) {
        //이상한에러
        return undefined;
      } else {
        console.log(err.response);
        return err.response;
      }
    }
}
}

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
