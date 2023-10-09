import { useEffect, useState } from 'react'
import './App.styled.js'
import { AppWrapper } from './App.styled.js'
import CreateTodo from './Components/CreateTodo.jsx'
import Status from './Components/Status.jsx'
import Todos from './Components/Todos.jsx'
import { request } from './helpers/request.js'
import { useDispatch, useSelector } from 'react-redux'
import { TodoActions } from './Components/Store/Todo.slice.js'
import { TestActions } from './Components/Store/Test.slice.js'

export const StatusType = Object.freeze({
  ALL: 'ALL',
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED'
});

function App() {
  const { todos } = useSelector((state) => state.Todo);
  const { testTodos } = useSelector((state) => state.Test);
  console.log(testTodos, 'TEST TODOS');
  const [filteredArr, setFilteredArr] = useState([]);
  const [status, setStatus] = useState(StatusType.ALL);
  const dispatch = useDispatch();
  
  useEffect(() => {
    switch (status) {
      case StatusType.ALL:
        setFilteredArr(todos)
        break;
      case StatusType.PENDING:
        const newPendingArr = todos.filter((obj) => {
          return obj.isCompleted === false;
        })
        setFilteredArr(newPendingArr);
        break;
      case StatusType.COMPLETED:
        const newCompletedArr = todos.filter((obj) => {
          return obj.isCompleted === true;
        })
        setFilteredArr(newCompletedArr);
        break;
      default:
        break;
    }
  },[status, todos]);

  useEffect(() => {
    const fetchData = async () => {
      const requestResult = await request('get', 'http://localhost:3000/todos');
      dispatch(TodoActions.setTodos(requestResult.data));
      dispatch(TestActions.setTestTodos(requestResult.data));
    }
    fetchData();
  },[]);

  return (
    <AppWrapper>
      <div className='todoWrapper'>
        <CreateTodo />
        <Status filteredArrState={[filteredArr, setFilteredArr]} statusState={[status, setStatus]} />
        <Todos filteredArrState={[filteredArr, setFilteredArr]} />
      </div>
    </AppWrapper>
  )
}

export default App;
