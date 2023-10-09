import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
};

const TodoSlice = createSlice({
    name: 'Todo', 
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
    }
});

const {actions, reducer} = TodoSlice;

export const TodoActions = actions;
export default reducer;