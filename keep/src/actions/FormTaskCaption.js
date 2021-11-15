

import api from '../api/api.js';
import { OPEN_FORM_NEW_TASK_CAPTION, OPEN_FORM_EDIT_TASK_CAPTION } from '../stores/const.js';



export const actioncloseFormNewTaskCaption = (data, dispatch) => {
    dispatch({ type: OPEN_FORM_NEW_TASK_CAPTION, data: data });
}

export const actioncloseFormEditTaskCaption = (data, dispatch) => {
    dispatch({ type: OPEN_FORM_EDIT_TASK_CAPTION, data: data });
}

export const actionsetNewTaskCaption = (data, dispatch) => {
    api.setNewTaskCaption(data, dispatch);
}

export const actioneditTaskCaption = (data, dispatch) => {
    api.editTaskCaption(data, dispatch);
}

