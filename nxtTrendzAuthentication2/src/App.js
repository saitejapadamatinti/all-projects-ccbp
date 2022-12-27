import {Route, Switch} from 'react-router-dom'
import products from './components/Products'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Cart from './components/Cart'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={products} />
    <Route exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
)

export default App
