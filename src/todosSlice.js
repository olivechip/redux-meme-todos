import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [] }
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        removeTodos: (state, action) => {
            state.todos = state.todos.filter(todo => {
                return state.todos[action.payload] !== todo
            });
        },
        clear: () => initialState
    }
});

export const { addTodos, removeTodos, clear } = todosSlice.actions;
export default todosSlice.reducer;