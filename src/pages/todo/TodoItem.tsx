import React, { useState, useRef } from 'react';
import { AddBtn, CheckBox, Todo, TodoLayer, Input } from '../../styles/todo';

interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface TodoItemProps {
  todoItem: {
    isCompleted: boolean;
    userId: number;
    id: number;
    todo: string;
  };
  HandleUpdate: (todo: Todo) => void;
  HandleDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  //React.FC가 하위로 props에 대한 정의를 가지고있음
  todoItem: { isCompleted, id, todo }, //todoItem에서 속성을 추출하여 각 변수에 할당한다. 변수명을 따로 두고 싶으면
  // isCompleted: a 와 같이 사용하면 된다.
  todoItem,
  HandleUpdate,
  HandleDelete,
}) => {
  const inputRef = useRef<HTMLInputElement>(null); //null을 지정하지않으면 type에러발생 ㅠㅠ
  const [onModifyMode, setOnModifyMode] = useState(false);
  const [todoitem, setTodoitem] = useState(todoItem);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); //버튼의 경우 새로고침이 되도록 설정되어 있어서 이를 막으려고 사용
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      HandleUpdate({ ...todoitem, todo: inputValue, isCompleted: false }); //todo,checked 변경
      setTodoitem(prev => {
        //비동기라서 ref값을 못가져오기때문에 따로 변수 선언
        return { ...prev, todo: inputValue };
      });
      inputRef.current.value = '';
      setOnModifyMode(prev => !prev);
    }
  };

  const HandleClick = () => {
    setOnModifyMode(prev => !prev);
  };

  const handleDelete = () => {
    HandleDelete(id);
  };
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    HandleUpdate({ ...todoitem, isCompleted: e.target.checked }); //todo 변경
  };
  return (
    <>
      <TodoLayer key={id}>
        {onModifyMode && (
          <>
            <CheckBox type="checkbox" name="todo" />
            <Input data-testid="modify-input" defaultValue={todo} ref={inputRef} />
            <AddBtn data-testid="submit-button" onClick={handleSubmit}>
              제출
            </AddBtn>
            <AddBtn data-testid="cancel-button" onClick={HandleClick}>
              취소
            </AddBtn>
          </>
        )}
        {!onModifyMode && (
          <>
            <CheckBox
              type="checkbox"
              name="todo"
              defaultChecked={isCompleted}
              onChange={handleCheckbox}
            />
            <Todo>{todo}</Todo>
            <AddBtn data-testid="modify-button" onClick={HandleClick}>
              수정
            </AddBtn>
            <AddBtn data-testid="delete-button" onClick={handleDelete}>
              삭제
            </AddBtn>
          </>
        )}
      </TodoLayer>
    </>
  );
};

export default TodoItem;
