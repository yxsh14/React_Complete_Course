import { createSlice, nanoid } from '@reduxjs/toolkit';
// create Slice slice generate karne k liye hoga jo ki reducer create karte hain yaha hum ek or method 'nanoid' bhi import karenge just to create unique ids


// initial state of store 
const initialState = {
    todos: [{
        id: 1,
        text: "hello world"
    }]
}

// Slice reducer ka bada version hai or reducer bs ek functionality hai jiski madad se hum store k data ko access or change kar skte hain iske alwa or koi raasta nhi change karne ka store ki states ko 

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        //isme properties or functions aate hain 

        // Jab bhi koi method action ke andar likhenge to usko well defined karenge sirf empty nhi chodhenge yahin redux context api se differ kar jata hai 

        // yaha har function mai do chezzon ka access hoga
        // state or action
        addTodo: (state, action) => {
            // current state ke andar kya kya values hain wo batayegi 
            // Actions jab kisi method k input mai kuch values jese id daalni hon ek particular operation perform karane k liye to wo values actions se milti hain
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            // create to ho gaya state ke andar daalna padega
            state.todos.push(todo)

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            state.todos = state.todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, text }
                }
                return todo
            })
        },



    }

})
// Yaha jo reducers banayen hain unko export karna padega individually  

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

// Store ko bhi reducers k baare mai sari info chahiye taki wo apni state update kar skte unse le kar 
export default todoSlice.reducer


// Ab chalenge store par reducer ki knowledge dene 