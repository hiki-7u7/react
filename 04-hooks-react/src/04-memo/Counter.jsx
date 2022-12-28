import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Count } from './Count'

export const Counter = () => {

    const { counter, increment } = useCounter()
    const [counter2, setCounter2] = useState(0)


    return (
        <>
        
            <h1>Metodo memo de React</h1>
            <Count  count={counter} />
            <h2>{counter2}</h2>
            <button className='btn btn-primary' onClick={ increment } >+1</button>
            <button className='btn btn-primary' onClick={ () => setCounter2( counter2 + 1 ) } >+1 counter2</button>


        </>
    )
}
