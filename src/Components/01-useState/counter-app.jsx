import React, { useState } from 'react'
import './counter.css'

const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    //Extrayendo propiedades del state.
    const {counter1, counter2} = state;

    return (
        <>
          <hr/> 
          <h1>counter1 {counter1}</h1>
          <h1>counter2 {counter2}</h1>

          <button className='btn btn-primary'
           onClick={ () => {
            setState({
                ...state,
                counter1: counter1 + 1
              });
           }}
           > Counter1 +1 </button>

          <button className='btn btn-primary'
           onClick={ () => {
            setState({
                ...state,
                counter2: counter2 + 1
              });
           }}
           >Counter2 +1 </button>
        </>
    )
}

export default CounterApp
