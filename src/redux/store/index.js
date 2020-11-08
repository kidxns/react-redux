import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import reducers from '../reducers';

export default function store() {
    const store = createStore(reducers, composeWithDevTools());
    return store;
}