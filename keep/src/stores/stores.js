import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'


import {
  TASKS_LOAD_REQUEST,
  OPEN_FORM_NEW_TASK_CAPTION,
  OPEN_FORM_EDIT_TASK_CAPTION,
  OPEN_FORM_TASK_ITEM_EDIT,
  OPEN_FORM_TASK_ITEM_NEW
} from './const.js';



const initState = {
  // ключ - идентификатор счётчика, значение - число нажатий
  TaskLists: {},
  openFormNewTaskCaption: false,
  openFormEditTaskCaption: false,
  addNewTaskCaption: true,
  openFormTaskItemNew: false,
  openFormTaskItemEdit: false,

}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function TaskReducer(state = initState, action) {
  switch (action.type) {
    case TASKS_LOAD_REQUEST: {
      console.log("state TASKS_LOAD_REQUEST");
      let newState = {
        ...state,
        TaskLists: action.tasklists
      };
      return newState;
    }
    case OPEN_FORM_NEW_TASK_CAPTION: {
      console.log("state OPEN_FORM_NEW_TASK_CAPTION");
      let newState = {
        ...state,
        openFormNewTaskCaption: action.data
      };
      return newState;
    }
    case OPEN_FORM_EDIT_TASK_CAPTION: {
      console.log("state OPEN_FORM_EDIT_TASK_CAPTION");
      let newState = {
        ...state,
        openFormEditTaskCaption: action.data
      };
      return newState;
    }
    case OPEN_FORM_TASK_ITEM_NEW: {
      console.log("state  OPEN_FORM_TASK_ITEM_NEW");
      let newState = {
        ...state,
        openFormTaskItemNew: action.data
      };
      return newState;
    }
    case OPEN_FORM_TASK_ITEM_EDIT: {
      console.log("state  OPEN_FORM_TASK_ITEM_EDIT");
      let newState = {
        ...state,
        openFormTaskItemEdit: action.data
      };
      return newState;
    }

    default:
      return state;
  }
}


let combinedReducer = combineReducers({
  // редьюсер countersReducer отвечает за раздел state под именем counters
  stateTaskLists: TaskReducer,
  /*routing: routerReducer*/
  // + другие редьюсеры
});

export default combinedReducer;