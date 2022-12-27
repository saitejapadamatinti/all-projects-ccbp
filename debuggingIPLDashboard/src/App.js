import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import MatchCard from './components/MatchCard'
import TeamMatches from './components/TeamMatches'
import './App.css'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
