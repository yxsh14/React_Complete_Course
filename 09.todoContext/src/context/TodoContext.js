import React, { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    editTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }

});

export const TodoContextProvider = TodoContext.Provider

export function useTodo() {
    return useContext(TodoContext);
}

