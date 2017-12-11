import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'reactstrap'
import logo from './images/logo.svg'
import MyCustomComponent from './components/MyCustomComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Button color="danger">Bootstrap button</Button>
        </p>
        <div style={{ textAlign: 'center' }}>
          <MyCustomComponent title="It's a dropdown!" />
        </div>
      </div>
    )
  }
}

export default App
