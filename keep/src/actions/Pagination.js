import { PAGE } from '../stores/const.js';

export function actionPageNumber(dispatch, currentPage) {
    dispatch({ type: PAGE, data: { currentPage: currentPage } });
}






