import api from '../api/api.js';

export const actionsaveBook = (data, dispatch) => {
    api.saveBook(data, dispatch);
}