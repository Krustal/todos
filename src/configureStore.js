import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import todoApp from './reducers';

// Replaced with thunk middleware
// const thunk = (store) => (next) => (action) => {
//   if (typeof action === 'function') {
//     action(store.dispatch, store.getState);
//   } else {
//     next(action);
//   }
// };

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    todoApp,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
