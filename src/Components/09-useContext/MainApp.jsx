import React, { useState } from 'react'
import AppRouter from './AppRouter'
import { UserContext } from './UserContext'

const MainApp = () => {

   /*  const user = {
        id: 1234,
        name: 'William',
        lastName: 'Mosquera',
        email: 'wjmmk@hotmail.com',
        isActive: true
    } */

    const [user, setUser] = useState({});

    return (
        <div className="container-fluid">
          <UserContext.Provider 
            value={{
                    user,
                    setUser
                  }}
          >
             <AppRouter />
          </UserContext.Provider>
        </div>
    )
}

export default MainApp;
