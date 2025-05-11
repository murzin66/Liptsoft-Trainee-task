import axios, {AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {toast} from 'react-toastify';
import { AxiosError} from 'axios';
import { StatusCodes } from 'http-status-codes';


type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
  [StatusCodes.INTERNAL_SERVER_ERROR]: true,
  [StatusCodes.FORBIDDEN]: true,
};

const BACKEND_URL = 'https://iss.moex.com/iss/engines/stock/markets/shares/boardgroups/57/securities';
const REQUEST_TIMEOUT = 5000;
const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response) {
        if (shouldDisplayError(error.response)) {
          const detailMessage = error.response.data;
          toast.error(`Ошибка ${detailMessage}`);
        }
      } else if (error.request) {
        toast.error('Ошибка сети. Проверьте подключение.');
      } else {
        toast.error(`Произошла неизвестная ошибка: ${error.message}`);
      }

      throw error;
    }
  );


  return api;
};
