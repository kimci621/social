import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "1b0abcc4-f036-4d84-9fa1-40e925f4fcaf",
  },
});

const usersApi = {
  getUsers: () => {
    return instance.get(`users`, {}).then((res) => {
      return res.data;
    });
  },
  getSelfAccount: () => {
    return instance.get("profile/2").then((res) => {
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
  getAuthStatus: () => {
    return instance.get("auth/me").then((res) => {
      if (res.data.resultCode === 0) {
        return res.data.data;
      }
    });
  },
};

export default usersApi;
