import React, { memo } from 'react'

const Small = memo(({value}) => {

    console.log('we are comeback !!!')

    return (
        <div>
            <small> { value }</small>
        </div>
    )
})

export default Small
