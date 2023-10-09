import { useState } from 'react'
import { Todo, TodosWrapper } from './Todo.styled';
import { Checkbox, FormControlLabel, IconButton } from '@mui/material';
import { Close, Delete } from '@mui/icons-material';
import { request } from '../helpers/request';
import { useDispatch, useSelector } from 'react-redux';
import { TodoActions } from './Store/Todo.slice';

function Todos({filteredArrState}) {  
  const [filteredArr, setFilteredArr] = filteredArrState; 
  const dispatch = useDispatch(); 
  const { todos } = useSelector((state) => state.Todo);
  
  const handleCheck = async (e, id) => {
    const findTodo = todos.find((obj) => {
        return obj.id === id;
    });
    await request('PUT', `http://localhost:3000/todos/${id}`, {name: findTodo.name, isCompleted: !findTodo.isCompleted});
    const result = await request('GET', 'http://localhost:3000/todos');
    dispatch(TodoActions.setTodos(result.data));
  };  

  const deleteHandler = async (id) => {
    await request('DELETE', `http://localhost:3000/todos/${id}`);
    const responseData = await request('GET', 'http://localhost:3000/todos')
    dispatch(TodoActions.setTodos(responseData.data));
  };

  return (
    <TodosWrapper>
        {filteredArr.map((obj) => {
            return (
                <Todo key={obj.id} checked={obj.isCompleted}>
                    <FormControlLabel control={
                    <Checkbox 
                        onChange={(e) => handleCheck(e, obj.id)} 
                        checked={obj.isCompleted}/>} 
                        label={obj.name}
                    />
                    <IconButton 
                        onClick={() => deleteHandler(obj.id)}
                        className='deleteButton'
                    >
                        <Delete />
                    </IconButton>
                </Todo>
            )
        })}
    </TodosWrapper>
  )
}

export default Todos
