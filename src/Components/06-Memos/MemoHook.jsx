import React, {useState,useMemo} from 'react'
import { procesoPesado } from '../../Helpers/procesoPesado';
import { useCounter } from '../../Hooks/useCounter'
import './effect.css'

const MemoHook = () => {

    const {counter, increment} = useCounter(100);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
    
    return (
      <div>
        <hr />
        <h1> Probando el Hook useMemo !!!</h1>
        <h4> Counter: <small> value={counter} </small></h4>

        <h1> {memoProcesoPesado}</h1>

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

export default MemoHook

 
