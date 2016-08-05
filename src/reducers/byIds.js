/*
 * A reducer which manages a map of todo ids to state information on that
 * todo.
 */
const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS': {
      const nextState = { ...state };
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    }
    default:
      return state;
  }
};

export default byId;

// Returns a todo given a state and an id.
export const getTodo = (state, id) => state[id];
