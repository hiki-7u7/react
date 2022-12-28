import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {


    const { username, email, password, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    })


    return (
        <>
        
        <h1>Formulario simple con custom hooks</h1>

        <input 
            type= "text" 
            name= "username" 
            placeholder= "username" 
            className= "form-control" 
            value= {username} 
            onChange= {onInputChange} />

        <input 
            type="email" 
            name="email" 
            placeholder="email" 
            className="form-control my-2" 
            value={ email } 
            onChange= {onInputChange} />

        <input 
            type="password" 
            name="password" 
            placeholder="password" 
            className="form-control" 
            value={ password } 
            onChange= {onInputChange} />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>

        </>

    )
}
