import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

const FormWithCustomHook = () => {

    const [formValue, handleInputChange, handleSubmit] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = formValue;

    useEffect( () => {
        console.log('PassWord Change');
    }, [password])

    return (
      <form onSubmit={handleSubmit}>
        <hr />
        <h1> UseEffect FormWithCustomHook </h1>

        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu Nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="****"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <hr />

        <button type="submit" className="btn btn-outline-dark">
          Save
        </button>
      </form>
    );
}

export default FormWithCustomHook
