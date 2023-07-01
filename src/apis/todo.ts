import { Authapi } from "./core";
export const createTodo = async(todo : string) =>{

    const response = await Authapi.post('todos',{todo});
    return response;
}

export const getTodo = async() =>{
    const response = await Authapi.get('todos');
    return response;
}