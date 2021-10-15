import { combineReducers } from 'redux';


const initState = {

    // ключ - идентификатор счётчика, значение - число нажатий
    cnts: {},

}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function countersReducer(state = initState, action) {
    switch (action.type) {

        case COUNTER_BUTTON_CREATE: {
            let newState = {
                ...state,
                cnts: {
                    ...state.cnts,
                    [action.counterid]: 0
                }
            };
            return newState;
        }

        default:
            return state;
    }
}


let combinedReducer = combineReducers({
    // редьюсер countersReducer отвечает за раздел state под именем counters
    counters: countersReducer,
    // + другие редьюсеры
});

export default combinedReducer;