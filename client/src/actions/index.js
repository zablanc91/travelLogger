import axios from 'axios';

//use dispatch passed from Redux-Thunk @ index.js
export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({type: 'FETCH_USER', payload: res.data});
};