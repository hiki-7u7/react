import {memo} from 'react'

export const Count = memo(({count}) => {

    console.log('Me estoy renderizando');

    return (
        <h2>{count}</h2>
    )
})
