import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import useFetch from '../../Hooks/useFetch'
import './effect.css'

const MultipleCustomHook = () => {

    const {counter, increment} = useCounter(1);

   const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   
   const {author, quote} = !!data && data[0];
   console.log(author, quote);

    return (
        <div>
            <hr />
            <h2> Breaking~Bad Quotes With useFetch!!!</h2>

            {
                loading ?
                    (
                        <div className="alert alert-info text-center">
                            loading...
                        </div>
                    )
                        :
                    (
                        <blockquote className="blockquote text-right">
                             <p className="mb-0"> {quote}</p>                             
                             <footer className="blockquote-footer mt-1"> {author}</footer>
                        </blockquote>
                    )    
            }

            <button 
                className="btn btn-outline-success"
                onClick={increment}
            > Next </button>

        </div>
    )
}

export default MultipleCustomHook
