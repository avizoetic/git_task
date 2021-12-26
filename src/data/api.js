import axios from "axios";
import { baseUrl } from "./../constants/variables";

export const base = () => {
  const data = {
    baseURL: baseUrl,
    headers: {
      "content-type": "application/json",
    },
  };

  return axios.create(data);
};

export const viewList = async (params) => {
  return base()
    .get(`search/repositories`, {
      params,
    })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("error from catch api", err);
      return err;
    });
};

export const viewDetail = async (payload) => {
  console.log(payload);
  return base()
    .get(`/repos/${payload.owner}/${payload.name}`)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("error from catch api", err);
      return err;
    });
};
