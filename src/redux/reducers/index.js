import { combineReducers } from 'redux';

//blogReducer
import blog from './blog';
import serviceApi from './serviceApi';

const allReducers = {
    blog,
    serviceApi
}

const rootReducers = combineReducers(allReducers)

export default rootReducers;
