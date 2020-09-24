import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import vacations from './vacations'
import logo from './img/avatar1.png'
import './App.css'
function Home() {
  return (
    <div>
      <h2>Welcome to Meadowlark Travel</h2>
      <p>Check out our "<Link to="/about">About</Link>" page!
</p>
    </div>
  )
}
function About() {
  return (<i>coming soon</i>)
}
function NotFound() {
  return (<i>Not Found</i>)
}
function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Meadowlark Travel</h1>
          <Link to="/"><img src={logo} alt="Meadowlark TravelLogo" /></Link>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/vacations" exact component={vacations} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}
export default App