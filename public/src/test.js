import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const Hello = () => (
  <div>
    <h1>Sup bitches</h1>
  </div>
)

const Home = () => (
  <div>
    <h1>Hello Sir</h1>
  </div>
)

class App extends Component {
  constructor(){
    super()
    this.state = {
      title: 'Hello World'
    }
  }

  render() {
    return (
      <Router>
      <div>
        <Route exact={true} path ='/' component={Hello} />
        <Route path ="/hello" component={Home}/>
      </div>
      </Router>
    )
  }
}


export default App