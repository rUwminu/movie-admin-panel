import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { AuthContextProvider } from './context/AuthContext/AuthContext'
import { MovieContextProvider } from './context/MovieContext/MovieContext'
import { ListContextProvider } from './context/ListContext/ListContext'
import { UserContextProvider } from './context/UserContext/UserContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
