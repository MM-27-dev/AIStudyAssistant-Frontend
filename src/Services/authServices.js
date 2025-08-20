import axios from "axios";
import config from "../config/config";

const BACKEND_URL = config.BACKEND_URL;

export class AuthService {
  // User authentication endpoints
  static USER_REGISTER = `${BACKEND_URL}/users/register`;
  static USER_LOGIN = `${BACKEND_URL}/users/login`;
  static USER_LOGOUT = `${BACKEND_URL}/users/logout`;
  static USER_UPDATE_PROFILE = `${BACKEND_URL}/users/update-profile`;
  static USER_FORGOT_PASSWORD = `${BACKEND_URL}/users/forgot-password`;
  static USER_CURRENT = `${BACKEND_URL}/users/current-user`;
  static USER_REFRESH_TOKEN = `${BACKEND_URL}/users/refresh-token`;

  // Chat session endpoints
  static CREATE_SESSION = `${BACKEND_URL}/chat/session`;
  static SEND_MESSAGE = `${BACKEND_URL}/chat/session`;
  static SAVE_MESSAGE = `${BACKEND_URL}/chat/session`;
  static END_SESSION = `${BACKEND_URL}/chat/session`;
  static GET_MESSAGE = `${BACKEND_URL}/chat/session`;
  static SEND_FILE = `${BACKEND_URL}/chat/session`;
  static OPENAI_VOICE_TOKEN = `${BACKEND_URL}/chat/openai/token`;

  static getSessions(limit = 10) {
    return axios.get(`${BACKEND_URL}/chat/sessions?limit=${limit}`, {
      withCredentials: true,
    });
  }

  static getVoiceToken(voice = "alloy") {
    return axios.post(
      AuthService.OPENAI_VOICE_TOKEN,
      { voice },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }

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
      withCredentials: true,
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

  static getCurrentUser() {
    return axios.get(AuthService.USER_CURRENT, {
      withCredentials: true,
    });
  }

  static getRefreshToken() {
    return axios.post(
      AuthService.USER_REFRESH_TOKEN,
      {},
      {
        withCredentials: true,
      }
    );
  }

  static updateProfile(payload) {
    return axios.patch(AuthService.USER_UPDATE_PROFILE, payload, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  }

  static createSession(payload) {
    return axios.post(AuthService.CREATE_SESSION, payload, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  }

  static sendMessageToSession(sessionId, payload) {
    return axios.post(
      `${AuthService.SEND_MESSAGE}/${sessionId}/message`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }

  static saveMessageToSession(sessionId, payload) {
    return axios.post(
      `${AuthService.SAVE_MESSAGE}/message/save/${sessionId}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }

  static endSessionAndGenerateTitle(sessionId) {
    return axios.post(
      `${AuthService.END_SESSION}/${sessionId}/end`,
      {},
      {
        withCredentials: true,
      }
    );
  }

  static getSessionMessages(sessionId) {
    return axios.get(`${AuthService.GET_MESSAGE}/${sessionId}/messages`, {
      withCredentials: true,
    });
  }

  static sendFileMessage(sessionId, formData) {
    return axios.post(
      `${AuthService.SEND_FILE}/${sessionId}/message/file`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
  }
}
