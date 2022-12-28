import { useForm } from "../hooks/useForm";

export const TodoForm = ({ onNewTodo }) => {

    const { onInputChange, tarea , onResetForm } = useForm({tarea:''});

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(tarea.trim().length <= 2) return;

        const newData =  {
            id: new Date().getTime() + 100,
            desc: tarea,
            done: false
        };

        onNewTodo(newData)
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                onChange={onInputChange} 
                value={tarea}
                className="form-control" 
                type="text" name="tarea" 
                placeholder="¿Que tarea desea agregar?" />

            <button 
             className="btn btn-primary mt-1" type="submit"
            >Agregar Tarea</button>
        </form> 
    )
}
