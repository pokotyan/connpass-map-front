import axios, { AxiosInstance } from "axios";
import store from "../store";
import { showLoading, hideLoading } from "../actions/ui";

const axiosInstance = axios.create();

const startRequest = () => {
  store.dispatch(showLoading({}));
};

const closeRequest = () => {
  store.dispatch(hideLoading({}));
};

export type axiosParams = [
  string, // url
  any?, // get,deleteの時はAxiosRequestConfig。post,putの時は送るパラメータ(any)
  any? // post,putの時はAxiosRequestConfig。
];

interface ExtendAxios extends AxiosInstance {
  [key: string]: any;
}

const request = (method: string) => async (...args: axiosParams) => {
  startRequest();

  let url = args.shift();

  const res = await (axiosInstance as ExtendAxios)
    // eslint-disable-next-line no-unexpected-multiline
    [method](url, ...args)
    .finally(closeRequest);

  return res;
};

export const get = request("get");
export const post = request("post");
export const put = request("put");
export const del = request("delete");
