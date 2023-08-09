import axios, { AxiosRequestConfig } from 'axios';

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
  console.log('tt', token);
  const sendOption: AxiosRequestConfig = {
    method,
    url: process.env.SERVER_URL + url,
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

  const result = await axios(sendOption);
  return result.data;
};

export default axiosFetch;
