import api from '../api/api.js';
import { OPEN_FORM_TASK_ITEM_EDIT } from '../stores/const.js';

export const actionopenFormNewItemEdit = (data, dispatch) => {
    dispatch({ type: OPEN_FORM_TASK_ITEM_EDIT, data });
}

export const actionremoveTaskItem = (data, dispatch) => {
    api.removeTaskItem(data, dispatch);
}

export const actionsetTaskItemStyle = (data, dispatch) => {
    api.setTaskItemStyle(data, dispatch);
}

export const actionsetTaskItemPin = (data, dispatch) => {
    api.setTaskItemPin(data, dispatch);
}
