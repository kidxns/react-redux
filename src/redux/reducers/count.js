
import { COUNT } from '../types';

// init
const INIT_STATE = {
    number: 0
}

export default function countReducer(state = INIT_STATE, action) {
    switch(action.type) {
        case COUNT.ADD:
            return {
                ...state,
                number: state.number + 1
            }
        default:
            return state;
    };
}