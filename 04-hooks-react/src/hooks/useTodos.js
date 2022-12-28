import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-reducer/TodoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
};

export const useTodos = () => {

    const [ todos, dispatchTodo ] = useReducer( todoReducer , [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    } , [todos]);

    const onNewTodo = (payload) => dispatchTodo({ type: "AGREGAR TAREA" , payload });
    const onDeleteTodo = (id) => dispatchTodo({ type: "BORRAR TAREA" , payload: id });
    const onCompletedTodo = (id) => dispatchTodo({ type: "COMPLETAR TAREA" , payload: id });
    

    return {
        todos,
        
        todosCount: todos.length,
        todosPending: todos.filter(todo => !todo.done).length,
        
        onNewTodo,
        onDeleteTodo,
        onCompletedTodo
    }
}