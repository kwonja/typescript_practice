import React,{useEffect,useState,useRef,useCallback} from 'react'
import { Input,AddBtn } from '../../styles/todo';
import { createTodo,getTodo } from '../../apis/todo';


interface Todo{
  id: number,
  todo: string
  isCompleted: boolean,
  userId : number
}

const Todo = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<Todo[]>([]);


  const HandleSubmit = async(e : React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault(); //새로고침방지
    if(inputRef.current)
    {
      const newtodo = await createTodo(inputRef.current.value)
      setTodos( (prev) => [...prev,newtodo.data])
      inputRef.current.value='';
    }
  }
  const gettodo =  useCallback ( async() =>{ //어짜피 처음만 렌더링되니까 쓰는 의미는 없지만 
                                             //todos가 바뀌기전에는 기존함수를 재사용한다는 의미로 사용해봄
    const response = await getTodo()
    setTodos(response.data);
  },[todos])

  useEffect( ()=>{
    gettodo();
  },[])
  return (
  <>
  <div className='todo'>
  <form onSubmit={HandleSubmit}>
  <label htmlFor='createTodo'></label>
  <Input type="text" id="createTodo" data-testid="new-todo-input" placeholder='오늘 할일을 입력해주세요' ref={inputRef}/>
  <AddBtn data-testid="new-todo-add-button">추가</AddBtn>
  </form>
  </div>

  {
    todos.map( (todo)=>(
      <div>{todo.todo}</div>
    ))
  }
  </>)
};

export default Todo;
