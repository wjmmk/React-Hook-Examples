import React, { useRef } from 'react'
import './effect.css'

const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        // Cuando Quiero selecionar por ID
        //document.getElementById('focus').select();

        // Cuando Quiero Seleccionar Por Referencia Ref
        inputRef.current.select();
    }
    return (
        <div>
            <hr />
            <h1> Focus Screen !!!</h1>

            <input 
                ref={inputRef}
                className="form-control"
                id="focus"
                placeholder="Enter your Name"
            />

            <button className="btn btn-outline-primary mt-2" 
                    onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}

export default FocusScreen
