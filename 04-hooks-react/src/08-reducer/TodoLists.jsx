import React from "react"
import {TodoItems} from "./TodoItems"

export const TodoLists = React.memo(({ data, onDeleteTodo, onCompletedTodo }) => {
    return (
        <ul className="list-group">
            {
                data.map(todo => (
                    <TodoItems 
                        key={todo.id} 
                        {...todo} 
                        onDeleteTodo={onDeleteTodo} 
                        onCompletedTodo={onCompletedTodo} />
                ))
            }
        </ul>
    )
})
