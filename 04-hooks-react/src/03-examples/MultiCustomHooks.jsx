import { useFetch } from "../hooks/useFetch"

export const MultiCustomHooks = () => {

    const { data, isLoading, error } = useFetch('https://rickandmortyapi.com/api/character/1');

    console.log({ data, isLoading, error });

    return (
        <> 
        
        <h1>MultiCustomHooks</h1>
        <hr />
        
        </>
    )
}
