import { Schema, arrayOf } from 'normalizr';

export const todo = new Schema('todos');
export const arrayOTodos = arrayOf(todo);
