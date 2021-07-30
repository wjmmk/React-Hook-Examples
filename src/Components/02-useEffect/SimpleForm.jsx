import React, { useEffect, useState } from 'react';
import './effect.css'
import Message from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState;

    useEffect( () => {
        console.log('Hey wey!!!');
    }, []);

    useEffect( () => {
        console.log('formState ha Cambiado!!!');
    }, [formState]);

    useEffect( () => {
        console.log('E~mail ha Cambiado!!!');
    }, [email]);

    const handleInputChange = ({ target }) => {
       // console.log(target.name)
       // console.log(target.value)
       setFormState({
           ...formState,
           [target.name]: target.value
       })
    }

    return (
        <>
          <hr />
          <h1> UseEffect </h1>

          <div className="form-group">
              <input 
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Tu Nombre"
                  autoComplete="off"
                  value={name}
                  onChange={ handleInputChange }
              />
          </div>

          <div className="form-group">
              <input 
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="email@****mail.com"
                  autoComplete="off"
                  value={email}
                  onChange={ handleInputChange }
              />
          </div>
         <hr />

          { (name === 'Willy') && <Message /> }
        </>
    )
}

 
