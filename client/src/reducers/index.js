import { combineReducers } from 'redux';
import authReducer from './authReducer';
import logReducer from './logReducer';
import viewportReducer from './viewportReducer';

export default combineReducers({
    auth: authReducer,
    logs: logReducer,
    viewport: viewportReducer
});