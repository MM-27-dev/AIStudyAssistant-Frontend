import axios from "axios";
import config from "../config/config";

const BACKEND_URL = config.BACKEND_URL;

export class AuthService {
  static USER_REGISTER = `${BACKEND_URL}/users/register`;
  static USER_LOGIN = `${BACKEND_URL}/users/login`;
  static USER_LOGOUT = `${BACKEND_URL}/users/logout`;
  static USER_PROFILE = `${BACKEND_URL}/users/profile`;
  static USER_UPDATE_PROFILE = `${BACKEND_URL}/users/update-profile`;
  static USER_FORGOT_PASSWORD = `${BACKEND_URL}/users/forgot-password`;

  static signup(payload) {
    return axios.post(AuthService.USER_REGISTER, payload, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  }

  static login(payload) {
    return axios.post(AuthService.USER_LOGIN, payload, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // include cookies if needed
    });
  }

  static logout() {
    return axios.post(
      AuthService.USER_LOGOUT,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
}
