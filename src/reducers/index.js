import { combineReducers } from 'redux';
import byId, * as fromById from './byIds';
import createList, * as fromCreateList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
});

const todos = combineReducers({
  byId,
  listByFilter,
});

export default todos;

// Selectors
// returns array of todos for the given state, useful for easily handling display
// of historical state without requiring large object stores.
export const getVisibleTodos = (state, filter) => {
  const ids = fromCreateList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};
