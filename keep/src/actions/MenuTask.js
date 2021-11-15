
import api from '../api/api.js';
import { OPEN_FORM_NEW_TASK_CAPTION, OPEN_FORM_EDIT_TASK_CAPTION } from '../stores/const.js';


export const actionopenFormNewTaskCaption = (data, dispatch) => {
    dispatch({ type: OPEN_FORM_NEW_TASK_CAPTION, data });
}
export const actionopenFormEditTaskCaption = (data, dispatch) => {
    dispatch({ type: OPEN_FORM_EDIT_TASK_CAPTION, data });
}
export const actiondeleteChapter = (data, dispatch) => {
    api.removeTaskCaption(data, this.props.dispatch);
}

