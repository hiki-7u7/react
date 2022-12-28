export const TodoItems = ({ id, desc, done, onDeleteTodo, onCompletedTodo }) => {

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span 
                className={done ? 'text-decoration-line-through' : ''} >{desc}</span>
            <div>
                <button 
                    onClick={() => onCompletedTodo(id)} 
                    className="btn btn-success" >Completar</button>

                <button 
                    onClick={() => onDeleteTodo(id)} 
                    className="btn btn-danger" >Borrar</button>
            </div>
        </li>
    )
}

