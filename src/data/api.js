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

export const viewList = async name => {
  return base()
    .get(`/users/${name}/repos`)
    .then(res => {
      return res?.data;
    })
    .catch(err => {
      console.log("error from catch api", err);
      return err;
    });
};
