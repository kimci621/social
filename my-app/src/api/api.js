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

const usersApi = {
  changeAvatar: async (url) => {
    return await instance.put("profile/photo", { image: url });
  },
  deleteUser: async (id) => {
    return await instance.delete(`follow/${id}`, {});
  },
  getUsers: async () => {
    return await instance.get(`users`, {}).then((res) => {
      return res.data;
    });
  },
  getSelfAccount: async (userId) => {
    return await instance.get(`profile/${userId}`).then((res) => {
      return res.data;
    });
  },
  getActivePage: async (activePage, count) => {
    return await instance
      .get(`users?page=${activePage}&count=${count}`)
      .then((res) => {
        return res.data;
      });
  },
  followUser: async (id) => {
    return await instance.post(`follow/${id}`, {});
  },
  updateStatus: async (payload) => {
    return await instance.put("profile/status", {
      status: payload,
    });
  },
  getStatus: async (userId) => {
    return await instance.get(`profile/status/${userId}`);
  },
};

export const authApi = {
  getAuthStatus: async () => {
    return await instance.get("auth/me").then((res) => {
      if (res.data.resultCode === 0) {
        return res.data.data;
      }
    });
  },
  loginApi: async (email, password, rememberMe = true, captcha) => {
    return instance.post("auth/login", {
      email: email,
      password: password,
      remember: rememberMe,
      captcha: captcha,
    });
  },
  logOutApi: async () => {
    return await instance.delete("auth/login");
  },
};

export const putImageApi = {
  putNewImage: async (data) => {
    const formData = new FormData();
    formData.append("image", data);
    return await instance.put("profile/photo", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export const putMainInfoInProfile = {
  putPayloadToApi: async (payload) => {
    const [userId, lookingForAJob, fullName, github] = [
      payload.userId,
      payload.lookingForAJob,
      payload.fullName,
      payload.github,
    ];
    const data = {
      userId: userId,
      lookingForAJob: lookingForAJob,
      lookingForAJobDescription: "none",
      fullName: fullName,
      AboutMe: "something about me",
      contacts: {
        github: github,
      },
    };
    return await instance.put("profile", { ...data });
  },
};

export const securityCaptchaApi = {
  getCaptchaUrl: async () => {
    return await instance.get("security/get-captcha-url");
  },
};
export default usersApi;
