import React, {useLayoutEffect, useRef} from 'react'
import { useCounter } from '../../Hooks/useCounter'
import useFetch from '../../Hooks/useFetch'
import './effect.css'

const LayoutEffect = () => {

   const {counter, increment} = useCounter(1);

   const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   
   const {author, quote} = !!data && data[0];
   //console.log(author, quote);

   const pTag = useRef();

   useLayoutEffect(() => {
       
       console.log('Este es el Valor Actual:', pTag.current.getBoundingClientRect());

   }, [quote])

    return (
      <div>
        <hr />
        <h2> UseLayoutEffect !!!</h2>

        <blockquote className="blockquote text-right">
          <p 
            className="mb-0"
            ref={pTag}
          > 
             {quote}
         </p>

          <footer className="blockquote-footer mt-1"> {author}</footer>
        </blockquote>

        <button 
                className="btn btn-outline-success"
                onClick={increment}
            > Next </button>
      </div>
    );
}

export default LayoutEffect




    

 