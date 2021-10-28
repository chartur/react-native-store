import {createStore, combineReducers} from 'redux';
import reducers from './src/reducers/reducers';

export default createStore(combineReducers(reducers));
