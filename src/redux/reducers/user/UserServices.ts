import {Dispatch} from 'redux';
import {UserTypes} from './UserTypes';
import {ILoginRequestData, } from './UserInterface';
import {IResponseData} from '../../../constants/types';
import client from '../../../utils/ApiClient';
import {config} from '../../../config';
import {showSnackbar} from '../../../utils/SnackBar';

export const userLogin = (data: ILoginRequestData) => {
  return async (dispatch: Dispatch<any>) => {
    return dispatch({
      type: UserTypes.LOGIN,
      payload: async () => {
        try {
          const response: IResponseData = await client.post(
            `${config.AUTH_API_URL}login`,
            data,
          );
          return Promise.resolve(response);
        } catch (error: any) {
          showSnackbar({message: error.message, type: 'danger'});
          return Promise.reject(error);
        }
      },
    });
  };
};
