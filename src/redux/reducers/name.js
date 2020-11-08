import { TEXT } from '../types';

const INIT_STATE = {
    name: 'thanh dep zai 2'
}

//export phai la 1 function
export default function nameReducer( state = INIT_STATE, action){
    switch (action.type) {
        case TEXT.NAME:
            return {
                ...state,
                name: action.payload.name
            }
    
        default:
            return state;
    }

}