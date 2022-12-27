import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Register from './components/Register'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
