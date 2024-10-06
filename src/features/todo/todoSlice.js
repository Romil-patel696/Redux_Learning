import { createSlice, nanoid } from "@reduxjs/toolkit";
//  nanoid is use to generate unique id

// define initial state it is a object having a state or property and its value is a array of objects.
const initialState={
    todos : []
}

// slice is big version of reducer

export const todoSlice=createSlice({
    name: 'todo',
    initialState,//create at up side ==> refer there.

    // in reducers property adn function
    reducers:{
        addTodo: (state, action)=>{
            const todo={
                id: nanoid(),
                text: action.payload.input
                // what ever argumenet is passed in dispatch function same is used here
            }

            state.todos.push(todo)
        },
        // ^ state is the current state given , like for here it is initialState... AND actions is the argument or something to take while calling the methode like id etc.
        removeTodo: (state, action) => {
            state.todos=state.todos.filter((todo)=>todo.id!== action.payload)
        },
        updateTodos : (state, action)=>{
            state.todos=state.todos.map(elem=> action.payload.id==elem.id ? {id:elem.id, text: action.payload.text}: elem)
        } 
    }
})

//  sayntax to export reducers individual functionalities

export const {addTodo, removeTodo,  updateTodos}= todoSlice.actions

// OUR 'STORE' IS A  RESCTRICTIVE STORE MEANS IT WILL  UPDATE VALUE ONLY IF UPDATE CALL COMES FROM THE REGISTERED OR GIVEN REDUCERS =>> GIVE LIST OF ALL REDUCERS

export default todoSlice.reducer