import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.list = state.list.filter((item) => item.id !== action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer