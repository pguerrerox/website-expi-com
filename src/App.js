import React, { Component } from 'react'

import './app.css'
import bg_logo from './expi_bg.jpeg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bg_logo} className="App-logo" alt="logo" />
        </header>
      </div>
    )
  }
}

export default App
