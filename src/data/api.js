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

export const viewList = async (name) => {
  return base()
    .get(`search/repositories?q=${name}`)
    .then((res) => {
      console.log(res.data.items);
      return res?.data.items;
    })
    .catch((err) => {
      console.log("error from catch api", err);
      return err;
    });
};

export const viewDetail = async (name, repo) => {
  return base()
    .get(`/repos/${name}/${repo}`)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("error from catch api", err);
      return err;
    });
};
