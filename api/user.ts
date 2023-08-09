import { useQuery, useMutation } from '@tanstack/react-query';
import axiosFetch from '../config/baseFetch';
import { UserQueryKeys as USER } from '../types/queryKeys';

export const useLogin = () => {
  return useMutation([USER.in], (data: { username: string; password: string }) =>
    axiosFetch({ url: '/user/login', data, method: 'post' }),
  );
};

export const useLogout = () => {
  return useMutation([USER.out], () => axiosFetch({ url: '/user/logout' }));
};
