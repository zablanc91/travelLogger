import { combineReducers } from 'redux';
import authReducer from './authReducer';
import logReducer from './logReducer';
import viewportReducer from './viewportReducer';
import selectedLogReducer from './selectedLogReducer';
import matchedLogReducer from './matchedLogReducer';

export default combineReducers({
    auth: authReducer,
    logs: logReducer,
    viewport: viewportReducer,
    selectedLog: selectedLogReducer,
    matchedLog: matchedLogReducer
});