import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './index.css'
import './theme/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import './theme/variables.scss'
import App from './App'
import { RefreshContextProvider } from './context/RefreshContext'
import reportWebVitals from './reportWebVitals'

delete localStorage.walletconnect

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <RefreshContextProvider>
        <App />
        <ToastContainer />
      </RefreshContextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
