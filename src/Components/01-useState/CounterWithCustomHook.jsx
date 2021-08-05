import React from 'react'
import { useCounter } from '../../Hooks/useCounter'

const CounterWithCustomHook = () => {

    // this is the functions declarate in the component useCounter.
    const {counter, decrement, increment, reset} = useCounter(10);

    return (
        <>
          <hr />
          <h1> Counter with Hook: {counter} </h1>

          <button onClick={ () => decrement(1)} className="btn btn-outline-info"> -1 </button>
          <button onClick={ reset } className="btn btn-outline-dark"> Reset </button>
          <button onClick={ () => increment(1)} className="btn btn-outline-primary"> +1 </button>
        </>
    )
}

export default CounterWithCustomHook
