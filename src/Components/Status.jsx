import { useState } from 'react'
import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import { StatusWrapper } from './Todo.styled';
import { StatusType } from '../App';

function Status({ statusState }) {
  const [status, setStatus] = statusState;

  return (
    <StatusWrapper>
      <div className='button'>
        <Button
           onClick={() => setStatus(StatusType.ALL)}
        >All</Button>
      </div>
      <div className='button'>
        <Button
          onClick={() => setStatus(StatusType.PENDING)}
        >Pending
        </Button>
      </div>
      <div className='button'>
        <Button
           onClick={() => setStatus(StatusType.COMPLETED)}
        >Completed</Button>
      </div>
    </StatusWrapper>
  )
}

export default Status
