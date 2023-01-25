import {API_URL} from '@env';

import axios from 'axios';

axios.defaults.baseURL = API_URL;

export const get = async (url: string, params: any = [], headers = {}) => {
  return axios.get(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
    params,
  });
};

export const post = async (url: string, data: any = [], headers = {}) => {
  // console.log(
  //   axios.getUri({
  //     url,
  //   }),
  // );

  return axios.post(url, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  });
};
