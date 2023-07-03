import axios from 'axios';
import { api } from './core';

export async function login(email: string, password: string) {
  //url 다음에 data 이다.
  //필요한 config들은 인스턴스에서 생성해주는게 좋을듯 하다
  try {
    const response = await api.post('auth/signin', { email, password });
    return response;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      if (!err.response) {
        //이상한에러
        return undefined;
      } else {
        console.log(err.response);
        return err.response;
      }
    }
  }
}
//ES6부터 단축속성명을 사용하기때문에 변수만 지정해도 변수명을 key값으로 자동으로 만들어준다
export async function signup(email: string, password: string) {
  try {
    const response = await api.post('auth/signup', { email, password });
    return response;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      if (!err.response) {
        //이상한에러
        return undefined;
      } else {
        console.log(err.response);
        return err.response;
      }
    }
  }
}
