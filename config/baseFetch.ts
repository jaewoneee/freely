import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { SERVER_URL } from 'react-native-dotenv';
import { getStorageData } from '../utils/storage';

const axiosFetch = async ({
  url,
  data,
  method = 'get',
}: {
  url: string;
  data?: any;
  method?: 'get' | 'post';
}) => {
  const token = await getStorageData('token');
  console.log('tt', token, url, data, method);
  const sendOption: AxiosRequestConfig = {
    method,
    url: SERVER_URL + url,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };

  if (data) {
    switch (method) {
      case 'post':
        sendOption.data = data;
        break;

      default:
        sendOption.params = data;
        break;
    }
  }
  try {
    const result = await axios(sendOption);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export default axiosFetch;
