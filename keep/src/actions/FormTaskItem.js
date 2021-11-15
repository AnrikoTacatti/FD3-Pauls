

import api from '../api/api.js';
import { OPEN_FORM_TASK_ITEM_NEW, OPEN_FORM_TASK_ITEM_EDIT } from '../stores/const.js';

export const actioncloseFormNew = (data, dispatch) => {
    dispatch({ type: OPEN_FORM_TASK_ITEM_NEW, data: data });
}

export const actioncloseFormEdit = (data, dispatch) => {
    dispatch({ type: OPEN_FORM_TASK_ITEM_EDIT, data: data });
}

export const actionsetNewTaskItem = (data, dispatch) => {
    api.setNewTaskItem(data, dispatch);
}

export const setTaskItem = (data, dispatch) => {
    api.setTaskItem(data, dispatch);
}


