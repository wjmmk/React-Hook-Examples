import React from 'react'

const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me volvi a GENERAR :(...')

    return (
        <button 
            className="btn btn-outline-dark"
            onClick= { ()=> {
                increment(5);
            }}>
            Increment
        </button>
    )
})

export default ShowIncrement
