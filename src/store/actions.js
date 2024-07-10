// src/store/actions.js
import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const login = ({ email, password }) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/login', { email, password });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.message
    });
  }
};
