import { useState } from 'react'
import { CreateTodoWrapper } from './Todo.styled'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { request } from '../helpers/request';
import { useDispatch } from 'react-redux';
import { TodoActions } from './Store/Todo.slice';

function CreateTodo() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = async () => {
    if(inputValue === '') {
      alert('Boş bırakılamaz!')
      return
    }   
    await request('post', 'http://localhost:3000/todos', {name: inputValue, isCompleted: false});
    const resultData = await request('get', 'http://localhost:3000/todos');
    dispatch(TodoActions.setTodos(resultData.data));
    setInputValue('');
  };

  const addWithEnter = (e) => {
    if(e.key === 'Enter') {
      addTodoHandler();
    }
  };

  return (
    <CreateTodoWrapper>
        <TextField
          fullWidth
          placeholder='Enter your new Todo'
          variant="outlined"
          value={inputValue}
          onKeyDown={addWithEnter}
          onChange={(e) => setInputValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={addTodoHandler}
                >
                  <AddIcon /> 
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
    </CreateTodoWrapper>
  )
}

export default CreateTodo
