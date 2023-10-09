import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    testTodos: []
};

const TestSlice = createSlice({
    name: 'Test',
    initialState,
    reducers: {
        setTestTodos: (state, action) => {
            state.testTodos = action.payload;
        }
    }
});

export const TestActions = TestSlice.actions;

export default TestSlice.reducer;