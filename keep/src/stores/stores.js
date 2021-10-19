import { combineReducers } from 'redux';


const TASKS_LOAD_REQUEST = 'TASKS_LOAD_REQUEST';



const initState = {
  // ключ - идентификатор счётчика, значение - число нажатий
  TaskLists: {},
}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function TaskReducer(state = initState, action) {
  switch (action.type) {

    case TASKS_LOAD_REQUEST: {
      console.log("state loadTaskLists");
      let newState = {
        ...state,
        TaskLists: action.tasklists
      };
      return newState;
    }
    default:
      return state;
  }
}


let combinedReducer = combineReducers({
  // редьюсер countersReducer отвечает за раздел state под именем counters
  TaskReducer: TaskReducer,
  // + другие редьюсеры
});

export default combinedReducer;