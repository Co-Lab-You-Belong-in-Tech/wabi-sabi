import { toast } from 'react-toastify';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESET_REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  START_LOADING,
  STOP_LOADING,
  LOAD_USER_SUCCESS,
} from './types';
import API_URL from '../config';

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    dispatch({ type: START_LOADING });

    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: '',
        },
        body: JSON.stringify({
          user: {
            name,
            email,
            password,
          },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Signed up sucessfully.');

        dispatch({ type: REGISTER_SUCCESS });
      } else {
        toast.error(data.error);

        dispatch({ type: REGISTER_FAIL });
      }

      dispatch({ type: STOP_LOADING });
    } catch (error) {
      dispatch({ type: REGISTER_FAIL });
    } finally {
      dispatch({ type: STOP_LOADING });
    }
  };

export const reset_register_success = () => (dispatch) => {
  dispatch({ type: RESET_REGISTER_SUCCESS });
};

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({ type: START_LOADING });

    try {
      const response = await fetch(`${API_URL}/users/sign_in`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      });
      const dataa = await response;
      const token = dataa.headers.get('Authorization');
      localStorage.setItem('token', token);

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);

        dispatch({ type: LOGIN_SUCCESS });
        // dispatch({ type: LOAD_USER_SUCCESS, payload: { user: data.user } });
        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });

        // dispatch(load_user());
      } else {
        toast.error(data.error);
        dispatch({ type: LOGIN_FAIL });
      }

      dispatch({ type: STOP_LOADING });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL });

      dispatch({ type: STOP_LOADING });
    }
  };

export const logout = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/users/sign_out`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      dispatch({ type: LOGOUT_SUCCESS });
    } else {
      dispatch({ type: LOGOUT_FAIL });
    }
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL });
  }
};
