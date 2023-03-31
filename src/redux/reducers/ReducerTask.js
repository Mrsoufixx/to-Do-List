import { add_task, remove_task, edit_task } from "../constants/ActionTypes";

const initialState = {
  tasks: [
    { id: 1, description: "create todo app with redux", isDone: false },
    { id: 2, description: "reveiller tôt", isDone: true },
  ],
};

export const ReducerTask = (state = initialState, action) => {
  switch (action.type) {
    case add_task:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case edit_task:
      const task = state.tasks.find(
        (u) => u.id === parseInt(action.payload.id)
      );
      if (task) {
        task.description = action.payload.description;
      }
      return state
    case remove_task:
      return {
        ...state,
        tasks: [...state.tasks.filter(t=> t.id !== action.payload)]
      };
    default:
      return state;
  }
};

export default ReducerTask;
