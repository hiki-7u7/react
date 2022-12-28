import { TodoLists } from "./TodoLists";
import { TodoForm } from "./TodoForm";
import { useTodos } from "../hooks/useTodos";
import 'animate.css';

export const TodoApp = () => {

    const { todos, todosCount, todosPending, onCompletedTodo, onDeleteTodo, onNewTodo } = useTodos();

    return (
        <>
            <h1>Tareas: {todosCount} Pendientes: {todosPending}</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {
                        (todos.length > 0)
                        ? <TodoLists 
                            data={todos} 
                            onDeleteTodo={onDeleteTodo} 
                            onCompletedTodo={onCompletedTodo} />
                        : <h2>Sin tareas :d</h2>
                    }                   
                </div>
                <div className="col-5">
                    <TodoForm onNewTodo={onNewTodo}/>
                </div>
            </div>
        </>
    )
}
