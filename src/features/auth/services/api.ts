import { envs } from '../../../config/envs';
import { getFetcher, postFetcher } from '../../utils/fetcher';
import { type LoginCredentials, type LoginResponse } from './types';



export const loginService = async (values: LoginCredentials) => {

  const resp = await postFetcher<LoginResponse>(`${envs.URL}/auth/user`, values)

  return resp

} 

export const renewTokenService = async () => {

  const resp = await getFetcher<LoginResponse>(`${envs.URL}/auth/user/renew`)

  return resp

}