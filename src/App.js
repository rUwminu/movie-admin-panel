import { useContext } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { AuthContext } from './context/AuthContext/AuthContext'

// Components & Pages
import { Topbar, Sidebar } from './components/index'
import {
  Login,
  Home,
  UserList,
  User,
  NewUser,
  ProductList,
  Product,
  NewProduct,
  ListPage,
  List,
  NewList,
} from './Pages/index'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <Switch>
        <Route path='/login' exact>
          {user ? <Redirect to='/movie-admin-panel' /> : <Login />}
        </Route>
        {user ? (
          <>
            <Topbar />
            <BodyContainer>
              <Sidebar />
              <Route path='/movie-admin-panel' exact>
                <Home />
              </Route>
              <Route path='/users'>
                <UserList />
              </Route>
              <Route path='/user/:id'>
                <User />
              </Route>
              <Route path='/newUser'>
                <NewUser />
              </Route>
              <Route path='/movies'>
                <ProductList />
              </Route>
              <Route path='/movie/:id'>
                <Product />
              </Route>
              <Route path='/newMovie'>
                <NewProduct />
              </Route>
              <Route path='/lists'>
                <ListPage />
              </Route>
              <Route path='/list/:id'>
                <List />
              </Route>
              <Route path='/newList'>
                <NewList />
              </Route>
            </BodyContainer>
          </>
        ) : (
          <Redirect to='/login' />
        )}
      </Switch>
    </Router>
  )
}

const BodyContainer = styled.div`
  ${tw`
    h-screen
    w-screen
    flex
    bg-gray-100
  `}
`

export default App
