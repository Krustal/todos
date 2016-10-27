/*
 * A reducer which manages a map of todo ids to state information on that
 * todo.
 */
const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos,
    };
  }
  return state;
};

export default byId;

// Returns a todo given a state and an id.
export const getTodo = (state, id) => state[id];
