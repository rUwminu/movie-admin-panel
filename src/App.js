import tw from 'twin.macro'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components & Pages
import { Topbar, Sidebar } from './components/index'
import {
  Home,
  UserList,
  User,
  NewUser,
  ProductList,
  Product,
  NewProduct,
} from './Pages/index'

function App() {
  return (
    <Router>
      <Topbar />
      <BodyContainer>
        <Sidebar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/users' exact>
            <UserList />
          </Route>
          <Route path='/user/:id' exact>
            <User />
          </Route>
          <Route path='/newUser' exact>
            <NewUser />
          </Route>
          <Route path='/products' exact>
            <ProductList />
          </Route>
          <Route path='/product/:id' exact>
            <Product />
          </Route>
          <Route path='/newProduct' exact>
            <NewProduct />
          </Route>
        </Switch>
      </BodyContainer>
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
