export const todoReducer = ( initialState = [], action ) => {

    switch (action.type) {

        case 'AGREGAR TAREA':
        return [...initialState,action.payload];

        case 'BORRAR TAREA':
        return  initialState.filter(el => el.id !== action.payload);

        case 'COMPLETAR TAREA':
        const tareaCompletada = initialState.map(el => {
            if (el.id === action.payload) {
                return {
                    ...el,
                    done: !el.done
                }
            }

            return el
        })
        return tareaCompletada

        default: initialState;
    }

}