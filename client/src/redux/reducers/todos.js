import * as type from '../types';

const initialState = { todos: [] };

export default function todos(state = initialState, action) {
  switch (action.type) {
    case type.SET_TODOS:
      console.log('todo reducer', action);
      return {
        ...state,
        todos: action.payload.data.todos,
      };

    default:
      return state;
  }
}
