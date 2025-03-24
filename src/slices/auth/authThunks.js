import { loginSuccess, logout } from './authSlice';

export const loginUser = (credentials) => async (dispatch) => {
  // Simula una llamada a la API
  const user = await AuthAPI(credentials);
  dispatch(loginSuccess(user));
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};