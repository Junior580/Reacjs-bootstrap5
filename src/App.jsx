import React from 'react'
import { Home } from './Components/Home'
import './styles/App.scss'
import Logo from './assets/pizzaLogo.png'

//bootstrap
// import * as bootstrap from 'bootstrap'
// import Alert from 'bootstrap/js/dist/alert'
// import { Tooltip, Toast, Popover } from 'bootstrap'

const App = () => (
  <div>
    <h1>Hello world! I am using React</h1>
    <Home />
    <div className="leftSide">
      <img src={Logo} alt="" />
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  </div>
)

export default App
