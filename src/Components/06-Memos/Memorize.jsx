import React, { useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import Small from './Small'
import './effect.css'

const Memmorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
      <div>
        <hr />
        <h2> Empleando la Funcion Memo !!!</h2>
        <h4> Counter: <Small value={counter} /> </h4>

        <button className="btn btn-primary" onClick={increment}>
          +1
        </button>

        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setShow(!show);
          }}
        >
          Show/Hide {JSON.stringify(show)}
        </button>
      </div>
    );
}

export default Memmorize
