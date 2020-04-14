import { combineReducers } from 'redux';
import authReducer from './authReducer';
import logReducer from './logReducer';
import viewportReducer from './viewportReducer';
import selectedLogReducer from './selectedLogReducer';

export default combineReducers({
    auth: authReducer,
    logs: logReducer,
    viewport: viewportReducer,
    selectedLog: selectedLogReducer
});