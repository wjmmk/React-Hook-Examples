import React, {useState, useCallback} from 'react';
import ShowIncrement from './ShowIncrement';
import './effect.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback( (num) => {
        setCounter( count => count + num);
    }, [setCounter])

    return (
        <div>
            <hr />
            <h2> EMPLEANDO EL useCallbackHook !!!</h2>
            <h1> { counter }</h1>
            <ShowIncrement increment= {increment} />
        </div>
    )

}

export default CallbackHook


