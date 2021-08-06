import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const HomePage = () => {

    const {user} = useContext(UserContext);
    console.log(user);

    return (
        <div>
            <hr />
            <h1> Home Page</h1>

            <div className="container-fluid">
                <pre>
                    {JSON.stringify(user, null, 3)}
                </pre>
            </div>
        </div>
    )
}

export default HomePage
