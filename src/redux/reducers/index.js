import { combineReducers } from 'redux';

//blogReducer
import blog from './blog';

const allReducers = {
    blog
}

const rootReducers = combineReducers(allReducers)

export default rootReducers;
