import axios from 'axios';

//use dispatch passed from Redux-Thunk @ index.js
export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({type: 'FETCH_USER', payload: res.data});
};

export const fetchLogs = () => async (dispatch) => {
    const res = await axios.get('/api/logs');
    dispatch({type: 'FETCH_LOGS', payload: res.data});
};

export const changeViewport = (viewport) => (dispatch) => {
    dispatch({type: 'CHANGE_VIEWPORT', payload: viewport});
};

export const setSelectedLog = (selectedLog) => (dispatch) => {
    dispatch({type:'SET_SELECTED_LOG', payload: selectedLog});
};