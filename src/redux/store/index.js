import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// reducers
import reducers from '../reducers';

const composeEnhancer = process.env.NODE_ENV !== 'production' ? composeWithDevTools({}) : compose;

export default function store() {
    const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
    return store;
}