import React, { useState } from 'react'
import MultipleCustomHook from '../03-Examples/MultipleCustomHook'
import './effect.css'

const ExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <hr />
            <h1> Example del Hook Ref !!!</h1>

            {
                show && <MultipleCustomHook />
            }

            <button className="btn btn-primary mt-2"
                    onClick={ () => { setShow( !show )}}>
                Show/Hide
            </button>

            
        </div>
    )
}

export default ExampleRef
