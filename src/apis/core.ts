import axios from "axios";
import { getLocalStorageToken } from "../utils/auth";

// export const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';
export const BASE_URL:string = 'http://localhost:8000/';

//axios instance
const instance = (url : string)=>{
    return axios.create(
        {
            baseURL : 'http://localhost:8000/',
            headers : {"Content-Type" : "application/json"},
        }
    )
}
//axios auth instance
const authinstance = (url : string)=>{
    return axios.create(
        {
            baseURL : 'http://localhost:8000/',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${getLocalStorageToken()}`,
              },
        }
    )
}
export const api = instance(BASE_URL)
export const Authapi = authinstance(BASE_URL)