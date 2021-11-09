import axios from "axios";
import { API } from "../config";

const token = localStorage.getItem("token");
export const doGet = async (uri, params = {}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    params,
  };
  return await axios.get(`${API}` + uri, config);
};

export const doPost = async (uri, postData, params = {}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    params,
  };
  return await axios.post(`${API}` + uri, postData, config);
};

export const doPostFormData = async (uri, postData, params = {}) => {
  console.log("params ", postData);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  return await axios.post(`${API}` + uri, postData, config);
};

export const doPatch = async (uri, patchData, params = {}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    params,
  };
  return await axios.patch(`${API}` + uri, patchData, config);
};

/*

export const doPut = (uri, putData, params = {}) => {
  return axiosInstance.put(`${ROOT_URL}` + "/api/" + uri, putData, {
    params
  });
};

export const doDelete = (uri, delData, params = {}) => {
  return axiosInstance.delete(`${ROOT_URL}` + "/api/" + uri, delData, {
    params
  });
};

export const doGetCancelToken = (uri, token, params = {}) => {
  return axiosInstance.get(`${ROOT_URL}` + "/api/" + uri, {
    params,
    cancelToken: token
  });
};

export const doPostExcel = (uri, postData, params = {}) => {
  return axiosInstance.post(`${ROOT_URL}` + "/api/" + uri, postData, {
    params,
    responseType: "blob"
  });
};
*/
