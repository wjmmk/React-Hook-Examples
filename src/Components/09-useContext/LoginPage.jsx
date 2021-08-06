import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginPage = () => {

    const {setUser} = useContext(UserContext);

    const user = {
        id: 1234,
        name: 'William',
        lastName: 'Mosquera',
        email: 'wjmmk@hotmail.com',
        isActive: true
    }

    return (
        <div>
            <hr />
            <h1> Login Page</h1>

            <button 
                className="btn btn-outline-primary"
                onClick= { ()=> setUser({user})}>
                Login
            </button>
        </div>
    )
}

export default LoginPage
