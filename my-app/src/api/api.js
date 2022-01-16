import axios from "axios";
/*
{email: required(string) "kimciwork@gmail.com"
password: required(string) "k5uHUcEagwv_ieV"
rememberMe: (boolean)
captcha: (boolean)
resultCode is 10 in response data.}
*/

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "1b0abcc4-f036-4d84-9fa1-40e925f4fcaf",
  },
});

const myUserId = "21352";

const usersApi = {
  changeAvatar: (url) => {
    return instance.put("profile/photo", { image: url });
  },
  deleteUser: (id) => {
    return instance.delete(`follow/${id}`, {});
  },
  getUsers: () => {
    return instance.get(`users`, {}).then((res) => {
      return res.data;
    });
  },
  getSelfAccount: (userId = myUserId) => {
    return instance.get(`profile/${userId}`).then((res) => {
      return res.data;
    });
  },
  getActivePage: (activePage, count) => {
    return instance
      .get(`users?page=${activePage}&count=${count}`)
      .then((res) => {
        return res.data;
      });
  },
  followUser: (id) => {
    return instance.post(`follow/${id}`, {});
  },
  updateStatus: (payload) => {
    return instance.put("profile/status", {
      status: payload,
    });
  },
  getStatus: (userId = myUserId) => {
    return instance.get(`profile/status/${userId}`);
  },
};

export const authApi = {
  getAuthStatus: () => {
    return instance.get("auth/me").then((res) => {
      if (res.data.resultCode === 0) {
        return res.data.data;
      }
    });
  },
  loginApi: (email, password, rememberMe = true) => {
    return instance.post("auth/login", {
      email: email,
      password: password,
      remember: rememberMe,
    });
  },
  logOutApi: () => {
    return instance.delete("auth/login");
  },
};

export default usersApi;
