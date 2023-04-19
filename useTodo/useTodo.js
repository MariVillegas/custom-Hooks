import { todoReducer } from "./todoReducer";
import { useEffect, useReducer } from "react"

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
};

export const useTodo = ( initialState = [] ) => {
    
    const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState, init);
  
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));      
      }, [todos])
    

    const handleNewTodo = ( todo ) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatchTodo ( action );
    };

    const handleDeleteTodo = ( id ) => {
        
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatchTodo ( action );
    };

    const handleToggleTodo = ( id ) => {
        
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }

        dispatchTodo ( action );
    };

    // const todosCount = ( todos ) => {
    //     return todos.length;
    // }

    // const pendingTodosCount = ( todos ) => {
    //     return todos.filter(todo => !todo.done).length;
    // }
  
    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
